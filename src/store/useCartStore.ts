import { create } from "zustand";
import type { Product } from "../types";

interface CartState {
    cartItems: Product[];
    toastMessage: string | null;
    addToCart: (product: Product) => void;
    clearToast: () => void;
    clearCart: () => void;
  
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  toastMessage: null,

  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
      toastMessage: `${product.name} lisätty ostoskoriin!`,
    })),

    clearToast: () => set({ toastMessage: null }),
    clearCart: () => set({ cartItems: [] }),
}));