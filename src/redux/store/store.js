import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../slice/countSlice';
import statusReducer from '../slice/statusSlice';

const store = configureStore({
  reducer: {
    // nama slice kita
    count: countReducer,
    // nama slice kita
    status: statusReducer,
  },
});

export default store;
