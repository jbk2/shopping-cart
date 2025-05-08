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
  
    const productA = screen.getByText(/Product A/);
    const productB = screen.getByText(/Product B/);
    const priceA = screen.getByText(/£9.99/);
    const priceB = screen.getByText(/£19.99/);
    expect(productA).toBeInTheDocument();
    expect(productB).toBeInTheDocument();
    expect(priceA).toBeInTheDocument();
    expect(priceB).toBeInTheDocument();
  })
});