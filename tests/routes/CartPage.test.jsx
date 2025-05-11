import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from '../../src/contexts/CartContext';
import CartPage from "/src/routes/CartPage";

describe("CartPage", {}, () => {
  it("renders the Navbar & Cart components", () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/cart"]}>
          <CartPage />
        </MemoryRouter>
      </CartProvider>
    );

    const navbar = screen.getByRole("banner");
    const cart = screen.getByTestId('cart');
    
    expect(navbar).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  })
});