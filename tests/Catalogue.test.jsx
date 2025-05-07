import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Catalogue from "/src/components/Catalogue.jsx";

describe("Catalogue component", () => {
  it("should show all products items", () => {
    render(<Catalogue />);
    const products = screen.getByText(/Product catalogue goes here/);
    expect(products).toBeInTheDocument();
  })
  
});