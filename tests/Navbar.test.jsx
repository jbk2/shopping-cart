import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Navbar from "/src/components/Navbar.jsx";

describe("Navbar component", () => {
  it("should contain a LogoType", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/E-Comm Store/i);
  })
  
  it("should contain a Cart component", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByTestId('cart')).toBeInTheDocument();
  })
  
});