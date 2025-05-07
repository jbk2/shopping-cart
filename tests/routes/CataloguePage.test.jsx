import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from '../../src/contexts/CartContext';
import CataloguePage from "/src/routes/CataloguePage";

describe("CataloguePage", {}, () => {
  it("renders the Navbar & Catalogue components", () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/catalogue"]}>
          <CataloguePage />
        </MemoryRouter>
      </CartProvider>
    );

    const navbar = screen.getByRole("banner");
    const catalogueContent = screen.getByText(/Product catalogue goes here/);
    
    expect(navbar).toBeInTheDocument();
    expect(catalogueContent).toBeInTheDocument();
  })
});