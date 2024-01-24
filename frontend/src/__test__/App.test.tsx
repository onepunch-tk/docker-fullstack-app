import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

test("renders hello message", () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React \+ TypeScript/i)).toBeInTheDocument();
  expect(screen.getByText(/Jest/i)).toBeInTheDocument();
});
