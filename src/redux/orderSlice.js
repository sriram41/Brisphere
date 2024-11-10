import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for submitting the order form
export const submitOrderAsync = createAsyncThunk(
  'order/submitOrderAsync',
  async (formData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    formData: {
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      rooms: 1,
    },
    status: 'idle',
    error: null,
    total: 0,
  },
  reducers: {
    submitOrder: (state, action) => {
      state.formData = action.payload;
    },
    calculateTotal: (state, action) => {
      const pricePerRoom = 12430; // Assuming fixed room price
      state.total = state.formData.rooms * pricePerRoom;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitOrderAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitOrderAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { submitOrder, calculateTotal } = orderSlice.actions;
export default orderSlice.reducer;
