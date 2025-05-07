import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import CartNavEl from "/src/components/CartNavEl.jsx";

describe("CartNavEl component", () => {
  it("should contain a Cart icon", () => {
    render(
      <MemoryRouter>
        <CartNavEl />
      </MemoryRouter>
    );
    const cartElement = screen.getByTestId("cart");
    const icon = cartElement.querySelector(".fa-cart-shopping");
    expect(icon).toBeInTheDocument();
  })
  
  it("should contain an items in cart count", () => {
    render(
      <MemoryRouter>
        <CartNavEl />
      </MemoryRouter>
    );
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