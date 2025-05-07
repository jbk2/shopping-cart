import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CartPage from "/src/routes/CartPage";

describe("CataloguePage", {}, () => {
  it("renders the Navbar & Catalogue components", () => {
    render(
      <MemoryRouter initialEntries={["/catalogue"]}>
        <CartPage />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("banner");
    const cart = screen.getByText(/Cart contents here/);
    
    expect(navbar).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  })
});