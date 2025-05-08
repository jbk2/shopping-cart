import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from '../../src/contexts/CartContext';
import CataloguePage from "/src/routes/CataloguePage";

describe("CataloguePage", {}, () => {
  const mockProducts = [
    { id: '1', title: 'Apple', image: '/apple.png' },
    { id: '2', title: 'Banana', image: '/banana.png' },
  ];
  
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockProducts),
      })
    ));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the Navbar & Catalogue components", async () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/catalogue"]}>
          <CataloguePage />
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Banana')).toBeInTheDocument();
    })
  })
});