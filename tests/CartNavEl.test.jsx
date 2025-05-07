import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/contexts/CartContext';
import CartNavEl from "/src/components/CartNavEl.jsx";

describe("CartNavEl component", () => {

  beforeEach(() => {
    render(
      <CartProvider>
        <MemoryRouter>
          <CartNavEl />
        </MemoryRouter>
      </CartProvider>
    );
  })
  it("should contain a Cart icon", () => {
    const cartElement = screen.getByTestId("cart");
    const icon = cartElement.querySelector(".fa-cart-shopping");
    expect(icon).toBeInTheDocument();
  })
  
  it("should contain an items in cart count", () => {
    const cartElement = screen.getByTestId("cart");
    const cartCount = cartElement.querySelector('#cart-count');
    expect(cartCount.textContent).toBe('0');
  })

  it.skip("should increment by one when a product is added to the cart", () => {
  })
  
  it.skip("should decrement by one when a product is added to the cart", () => {
  })

  it.skip("should click to toggle between the Cart and the Catalogue Components", () => {
  })
  
});