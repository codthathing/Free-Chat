import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SplashPage from "../pages/SplashPage";
import { beforeAll, describe, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { act } from "react";

const LocationDisplay = () => {
  const location = useLocation();
  return <p data-testid="location">{location.pathname}</p>
}

beforeAll(() => {
  console.log("SPLASH PAGE TEST")
})

test("TESTING INTERACTIVITY OF SPLASH PAGE...", () => {
  vi.useFakeTimers();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route index element={<SplashPage />} />
        <Route path="/sign-in" element={<div>SIGN IN PAGE</div>} />
      </Routes>
      <LocationDisplay />
    </MemoryRouter>
  )

  const headingElement = screen.getByRole("heading", { name: "FreeChat" });
  expect(headingElement).toBeInTheDocument();

  act(() => {
    vi.advanceTimersByTime(3000);
  });

  const paragraphElement = screen.getByTestId("location");
  expect(paragraphElement).toHaveTextContent("/sign-in");

  vi.useRealTimers();
})