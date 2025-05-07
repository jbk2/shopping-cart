import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/contexts/CartContext';
import Navbar from "/src/components/Navbar.jsx";

describe("Navbar component", () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </CartProvider>
    );
  })

  it("should contain a LogoType", () => {
    expect(screen.getByRole("heading").textContent).toMatch(/E-Comm Store/i);
  })
  
  it("should contain a Cart component", () => {
    expect(screen.getByTestId('cart')).toBeInTheDocument();
  })
  
});