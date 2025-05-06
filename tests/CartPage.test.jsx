import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import CartPage from "/src/components/CartPage.jsx";

describe("CartPage component", () => {
  it.skip("should contain a Cart icon", () => {
    render(<CartPage />);
    // const cartElement = screen.getByTestId("cart");
    // const icon = cartElement.querySelector(".fa-cart-shopping");
    // expect(icon).toBeInTheDocument();
  })
  
});