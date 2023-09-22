import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//app test
// app test2
test("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
