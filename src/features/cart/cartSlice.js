import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setNumberOfItems: (state, action) => {
      state.numberOfItems = action.payload;
    },
  },
});

export const { setNumberOfItems } = cartSlice.actions;
export default cartSlice.reducer;
