import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import { CartProvider, useCart } from '/src/contexts/CartContext';
import { MemoryRouter } from "react-router-dom";
import Cart from "/src/components/Cart.jsx";

vi.mock('/src/contexts/CartContext', () => ({
  useCart: vi.fn()
}));

describe("Cart component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const cartItem = [
    { product: { id: '1', title: "product 1" }, qauntity: 1 },
  ];
  
  const cartItems = [
    { product: { id: '1', title: "product 1" }, qauntity: 1 },
    { product: { id: '2', title: "product 2" }, quantity: 2 }
  ];

  it("should show 'no items in cart' when none have been added to cart", () => {
    useCart.mockReturnValue({ cartItems: [], cartTotal: () => 0 })
    
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/no items in cart - shop/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /here/i })).toBeInTheDocument();
  })
  
  it("correctly shows item, quantity and price when user has added to the cart", () => {
    useCart.mockReturnValue({ cartItems: cartItem, cartTotal: () => 0 })
    
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
    const select = screen.getByRole('combobox')
    expect(select.value).toBe('1');
  })
  
  it("correctly shows multiple items, their quantities and total price when user has added them to the cart", () => {
    useCart.mockReturnValue({ cartItems: cartItems, cartTotal: () => 0 })
    
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/product 2/i)).toBeInTheDocument();
    const selects = screen.getAllByRole('combobox', )
    expect(selects[0].value).toBe('1');
    expect(selects[1].value).toBe('2');
  })
});