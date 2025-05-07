import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { CartProvider } from '/src/contexts/CartContext';
import Catalogue from "/src/components/Catalogue.jsx";

describe("Catalogue component", () => {
  it("should show all products items", () => {
    const mockProducts = [
      { id: 1, title: "Product A", price: 9.99 },
      { id: 2, title: "Product B", price: 19.99 },
    ];

    render(
      <CartProvider>
        <Catalogue products={mockProducts} />
      </CartProvider>
    );
    const products = screen.getByText(/Product catalogue goes here/);
    const productA = screen.getByText(/Product A/);
    expect(products).toBeInTheDocument();
    expect(productA).toBeInTheDocument();
  })
  
});