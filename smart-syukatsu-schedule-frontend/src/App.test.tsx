import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// app test234
test("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
