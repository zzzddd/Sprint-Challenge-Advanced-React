import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

test("test Alex Google Trends: Women's World Cup Players is found", () => {
  const { getByText } = render(<App />);

  // assert the text Strike in DOM

  getByText(/Google Trends: Women's World Cup Players/i);
});
