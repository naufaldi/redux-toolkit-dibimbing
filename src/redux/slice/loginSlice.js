import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//fetch login user

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (userData) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Login Fail');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('error try ctach', error);
      throw error;
    }
  }
);

//https://reqres.in/
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    status: 'idle',
    error: null,
  },
  // reducets sync
  reducers: {},
  // redusces async
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
