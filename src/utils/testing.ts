import { expect, test } from 'vitest';
import { useCartStore } from '../store/useCartStore';

test('empty cart', () => {
  const state = useCartStore.getState();
  expect(state.cartItems).toEqual([]);
});


