import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '/src/contexts/CartContext';

function TestComponent() {
  const { cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart} = useCart()
  const dummyProduct = { id: 1, title: 'Test', price: 10 }

  return (
    <div>
      <p data-testid="count">{cartItems[0]?.quantity || 0}</p>
      <button onClick={() => addToCart(dummyProduct, 2)}>Add 2</button>
      <button onClick={() => addToCart(dummyProduct, 3)}>Add 3</button>
      <button onClick={() => incrementQuantity(dummyProduct)}>+</button>
      <button onClick={() => decrementQuantity(dummyProduct)}>-</button>
      <button onClick={() => removeFromCart(dummyProduct)}>Remove</button>
    </div>
  );
}

describe("CartContext", () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
  })
  
  const count = () => screen.getByTestId("count").textContent;
  
  it("adds products to the Cart", () => {
    expect(count()).toBe("0");
    fireEvent.click(screen.getByText("Add 2"));
    expect(count()).toBe("2");
  })
  
  it("addding products to the Cart overwrites previous cart quantity", () => {
    expect(count()).toBe("0");
    fireEvent.click(screen.getByText("Add 2"));
    fireEvent.click(screen.getByText("Add 3"));
    expect(count()).toBe("3");
  })
  
  it("increments the Cart", () => {
    expect(count()).toBe("0");
    fireEvent.click(screen.getByText("Add 2"));
    fireEvent.click(screen.getByText("+"));
    expect(count()).toBe("3");
  })
  
  it("decrements the Cart", () => {
    expect(count()).toBe("0");
    fireEvent.click(screen.getByText("Add 2"));
    fireEvent.click(screen.getByText("-"));
    expect(count()).toBe("1");
  })
  
  it("removes a product from the Cart", () => {
    expect(count()).toBe("0");
    fireEvent.click(screen.getByText("Add 3"));
    fireEvent.click(screen.getByText("Remove"));
    expect(count()).toBe("0");
  })
}) 
