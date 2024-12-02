import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
  loggedIn: false,
  user: null,
  token: null
};

const exampleSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      const {accessToken, ...user } = action.payload;
      state.loggedIn = true;
      state.token = accessToken;
      state.user = user
    }
  },
});

export const { userLoggedIn } = exampleSlice.actions;

export default exampleSlice.reducer;
