import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.status = true;
    },
    setClose: (state) => {
      state.status = false;
    },
  },
});

export const { setOpen, setClose } = statusSlice.actions;

export default statusSlice.reducer;
