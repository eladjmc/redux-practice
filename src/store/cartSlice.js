import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
  totalCartPrice: 0,
  isCartShowing: false,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.totalQuantity++;
      if (state.itemsInCart.length === 0) {
        state.isCartShowing = true;
      }
      const existingItem = state.itemsInCart.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        console.log("this item exist");
        const itemIndexToAdd = state.itemsInCart.findIndex(
          (item) => item.name === action.payload.name
        );
        const amount = state.itemsInCart[itemIndexToAdd].amount + 1;
        state.itemsInCart[itemIndexToAdd].amount = amount;
        state.itemsInCart[itemIndexToAdd].totalPrice =
          action.payload.price * amount;
        return;
      }
      state.itemsInCart.push({
        ...action.payload,
        amount: 1,
        totalPrice: action.payload.price,
      });

      state.totalCartPrice += action.payload.price;
    },

    removeItemFromCart: (state, action) => {
      state.totalQuantity--;
      const itemIndexToRemove = state.itemsInCart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndexToRemove === -1) {
        return;
      }
      if (state.itemsInCart[itemIndexToRemove].amount === 1) {
        const newCartItems = state.itemsInCart.filter(
          (_, index) => index !== itemIndexToRemove
        );
        if (newCartItems.length === 0) {
          state.itemsInCart = [];
          state.totalCartPrice = 0;
          state.isCartShowing = false;
          return;
        }
        state.itemsInCart = newCartItems;
        return;
      }
      state.itemsInCart[itemIndexToRemove].amount--;
      state.itemsInCart[itemIndexToRemove].totalPrice -= action.payload.price;
    },
    toggleCartShow(state) {
      if (state.itemsInCart.length !== 0) {
        state.isCartShowing = !state.isCartShowing;
      } else {
        state.isCartShowing = false;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, toggleCartShow } =
  cartSlice.actions;

export default cartSlice.reducer;
