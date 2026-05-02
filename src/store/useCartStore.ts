import { create } from "zustand";
import type { Product } from "../types";

interface CartState {
    cartItems: Product[];
    addToCart: (product: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
}));