import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
  donated: false,
};

const exampleSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    donationStatus(state) {
        state.donated = true;
    }
  },
});

export const { donationStatus } = exampleSlice.actions;

export default exampleSlice.reducer;
