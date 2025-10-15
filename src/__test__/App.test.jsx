import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe("This is the App test", () => {
  test("To check if there's an heading element in the App on load", () => {
    render(<App />);
    const headingElement = screen.getByRole("button", { name: "Sign Up" });
    expect(headingElement).toBeInTheDocument();
  });
});