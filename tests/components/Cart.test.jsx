import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { CartProvider, useCart } from '../../src/contexts/CartContext';
import Cart from "/src/components/Cart.jsx";

describe("Cart component", () => {
  const cartItems = [
    { product: { id: '1', title: "product 1" }, qauntity: 1 },
    { product: { id: '2', title: "product 2" }, quantity: 2 }
  ];

  it("should not contain any items if not added to cart", () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
    const noItemsText = screen.getByText(/No items in cart/);
    expect(noItemsText).toBeInTheDocument();
  })
});