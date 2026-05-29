import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignInPage from "../pages/SignInPage";
import { beforeEach, describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("SIGN IN PAGE TEST", () => {
  beforeEach(() => {
    console.log("ABOUT TO START ANOTHER SECTION TEST.....");
  });

  describe("INTERACTIVITY OF INPUTS AND SIGN IN BUTTON", () => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>,
    );
    const emailInputElement = screen.getByPlaceholderText(/enter your email/i);
    const passwordInputElement = screen.getByPlaceholderText(/enter your password/i);
    const buttonElement = screen.getByRole("button", { name: "Sign In" });

    test("EXISTENCE OF ELEMENTS", () => {
      expect(emailInputElement).toBeInTheDocument();
      expect(passwordInputElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
