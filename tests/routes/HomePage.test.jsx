import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "/src/routes/HomePage";

describe("HomePage component", {}, () => {
  it("renders the Navbar & LandingContent components", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("banner");
    const landingContent = screen.getByText(/Beautiful kitchen table products/);
    
    expect(navbar).toBeInTheDocument();
    expect(landingContent).toBeInTheDocument();
  })
});