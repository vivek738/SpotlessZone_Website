import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import Addproduct from "./AddProduct";
//checking initial conditions
test("Initial conditions for addproduct form", () => {
  render(<Addproduct />);
  //   @assert
  //heading
  const headingElement = screen.getByRole("heading", {
    name: /Enter Product Details/i,
  });
  expect(headingElement).toBeInTheDocument();
  //btn
  const btnElement = screen.getByRole("button", {
    name: "Submit",
    exact: false,
  });
  expect(btnElement).toBeInTheDocument();
  //expect(btnElement).toBeDisabled();
  //input field present
  expect(screen.getAllByRole("textbox"))
});
//enable btn when type in input

//form validation
test("Validating inputs", () => {
  render(<Addproduct />);
  userEvent.click(screen.getByRole("button", { name: /Submit/i }));
  nameValidate();
  userEvent.click(screen.getByRole("button", { name: /Submit/i }));
  priceValidate();
  
});
function nameValidate() {
  return expect(screen.getByPlaceholderText("Enter product name")).toHaveAttribute("type","text");
}
function priceValidate() {
  return expect(screen.getByPlaceholderText("Enter product price")).toHaveAttribute("type","phone");
}

