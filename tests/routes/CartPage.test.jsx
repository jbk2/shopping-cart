import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from '../../src/contexts/CartContext';
import CartPage from "/src/routes/CartPage";

describe("CataloguePage", {}, () => {
  it("renders the Navbar & Catalogue components", () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/catalogue"]}>
          <CartPage />
        </MemoryRouter>
      </CartProvider>
    );

    const navbar = screen.getByRole("banner");
    const cart = screen.getByText(/Cart contents here/);
    
    expect(navbar).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  })
});