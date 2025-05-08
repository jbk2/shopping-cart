import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/contexts/CartContext';
import { useCart } from '../src/contexts/CartContext';
import CartNavEl from "/src/components/CartNavEl.jsx";

function CartTestDriver() {
  const { addToCart, removeFromCart } = useCart();
  return (
    <div>
      <button onClick={() => addToCart({ id: '1', title: 'Test', price: 9.99 }, 1)}>
        P1 +1
      </button>
      <button onClick={() => addToCart({ id: '1', title: 'Test', price: 9.99 }, 2)}>
        P1 +2
      </button>
      <button onClick={() => addToCart({ id: '2', title: 'Test', price: 10.99 }, 1)}>
        P2 +1
      </button>
      <button onClick={() => removeFromCart({id: '1'})}>
        Remove P1
      </button>
      <button onClick={() => removeFromCart({id: '2'})}>
        Remove P2
      </button>
    </div>
  );
}

describe("CartNavEl component", () => {

  beforeEach(() => {
    render(
      <CartProvider>
        <MemoryRouter>
          <CartNavEl />
          <CartTestDriver />
        </MemoryRouter>
      </CartProvider>
    );
  })
  it("should contain a Cart icon", () => {
    const cartElement = screen.getByTestId("cart");
    const icon = cartElement.querySelector(".fa-cart-shopping");
    expect(icon).toBeInTheDocument();
  })
  
  it("should contain a cart items count", () => {
    const cartElement = screen.getByTestId("cart");
    const cartCount = cartElement.querySelector('#cart-count');
    expect(cartCount.textContent).toBe(' 0');
  })

  describe('cart items count', () => {
    it("shows 1 when 1 product is added to the cart", () => {
      const cartCount = screen.getByTestId("cart").querySelector('#cart-count');
      const addP1x1 = screen.getByText('P1 +1');
      expect(cartCount.textContent).toBe(' 0');
      fireEvent.click(addP1x1);
      expect(cartCount.textContent).toBe(' 1');
    })
    
    it("shows 2 when a quantity of 2 of 1 product is added to the cart", () => {
      const cartCount = screen.getByTestId("cart").querySelector('#cart-count');
      const addP1x2 = screen.getByText('P1 +2');
      fireEvent.click(addP1x2);
      expect(cartCount.textContent).toBe(' 2');
    })
    
    it("shows the correct total when multiple products and quantities are added to the cart", () => {
      const cartCount = screen.getByTestId("cart").querySelector('#cart-count');
      const addP1x2 = screen.getByText('P1 +2');
      const addP2x1 = screen.getByText('P2 +1');
      fireEvent.click(addP1x2);
      fireEvent.click(addP2x1);
      expect(cartCount.textContent).toBe(' 3');
    })
    
    it("shows the correct total when products are removed", () => {
      const cartCount = screen.getByTestId("cart").querySelector('#cart-count');
      const addP1x2 = screen.getByText('P1 +2');
      const addP2x1 = screen.getByText('P2 +1');
      const removeP1 = screen.getByText('Remove P1');
      const removeP2 = screen.getByText('Remove P2');
      fireEvent.click(addP1x2);
      fireEvent.click(addP2x1);
      expect(cartCount.textContent).toBe(' 3');
      fireEvent.click(removeP1);
      expect(cartCount.textContent).toBe(' 1');
      fireEvent.click(removeP2);
      expect(cartCount.textContent).toBe(' 0');
    })
  })
});