import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProduct extends IProduct {
  orderQuantity: number;
}

interface IInitialState {
  products: CartProduct[];
}

const initialState: IInitialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToDecrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToDecrement && productToDecrement?.orderQuantity > 1) {
        productToDecrement.orderQuantity -= 1;
        return;
      }
    },
    orderRemove: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const orderProductSelector = (state: RootState) => {
  return state.cart.products;
};

console.log(orderProductSelector);

export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  orderRemove,
} = cartSlice.actions;
export default cartSlice.reducer;
