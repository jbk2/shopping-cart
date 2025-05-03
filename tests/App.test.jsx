import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "/src/App.jsx";

describe("App component", {}, () => {
  it("renders the Navbar component", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/E-Comm Store/i);
  })
});