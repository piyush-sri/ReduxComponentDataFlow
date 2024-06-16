// store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Counter/counterSlice'; // Adjust the path as per your project structure

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if any
  },
});

export default store;
