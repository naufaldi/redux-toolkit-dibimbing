import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // nama value dan value
  count: 200,
};

const countSlice = createSlice({
  // nama state
  name: 'count',
  // inisial state
  initialState,
  reducers: {
    // action namanya increment
    increment: (state) => {
      state.count += 1;
    },
    // action namanya decrement
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
// extrak action dari slice
export const { increment, decrement } = countSlice.actions;
//extract reducer / export reducer
export default countSlice.reducer;
