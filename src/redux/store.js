import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice'; // Import the reducer from the order slice

const store = configureStore({
  reducer: {
    order: orderReducer, // Register the order reducer
  },
});

export default store;
