// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { submitOrder, submitOrderAsync } from '../store/orderSlice';
// import axios from 'axios';

// // Async action
// export const submitOrderAsync = createAsyncThunk(
//   'order/submitOrderAsync',
//   async (formData) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//     return response.data;
//   }
// );

// const formSlice = createSlice({
//   name: 'order',
//   initialState: {
//     formData: {
//       name: '',
//       email: '',
//       checkIn: '',
//       checkOut: '',
//       rooms: 1,
//     },
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     submitOrder: (state, action) => {
//       state.formData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitOrderAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(submitOrderAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.formData = action.payload;
//       })
//       .addCase(submitOrderAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { submitOrder } = formSlice.actions;
// export default formSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { submitOrder, submitOrderAsync } from '../store/orderSlice';
// import axios from 'axios';

// // Async action
// export const submitOrderAsync = createAsyncThunk(
//   'order/submitOrderAsync',
//   async (formData) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//     return response.data;
//   }
// );

// const formSlice = createSlice({
//   name: 'order',
//   initialState: {
//     formData: {
//       name: '',
//       email: '',
//       checkIn: '',
//       checkOut: '',
//       rooms: 1,
//     },
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     submitOrder: (state, action) => {
//       state.formData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitOrderAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(submitOrderAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.formData = action.payload;
//       })
//       .addCase(submitOrderAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { submitOrder } = formSlice.actions;
// export default formSlice.reducer;
