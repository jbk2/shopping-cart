import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Cart from "/src/components/Cart.jsx";

describe("Cart component", () => {
  it("should contain the contents of the Cart", () => {
    render(<Cart />);
    const cartContents = screen.getByText(/Cart contents here/);
    expect(cartContents).toBeInTheDocument();
  })
});