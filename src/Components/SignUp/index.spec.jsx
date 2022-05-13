import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "./index";
import userEvent from "@testing-library/user-event";

//checking initial conditions
test("Initial conditions for register form", () => {
  render(<SignUp />);

  //   @assert
  //heading
  const headingElement = screen.getByRole("heading", {
    name: /create account/i,
  });
  expect(headingElement).toBeInTheDocument();

  //btn
  const btnElement = screen.getByRole("button", {
    name: "Sign Up",
    exact: false,
  });
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toBeDisabled();

  //input field present
  expect(screen.getAllByRole("textbox"))
});

//enable btn when type in input
test("Enable submit button on type", () => {
  render(<SignUp />);
  const btnElement = screen.getByRole("button", {
    name: "Sign Up",
    exact: false,
  });

  //name
  const nameIn = screen.getByPlaceholderText("Name", { exact: false });
  // samething can be done using userEvent
  userEvent.type(nameIn, "something");

  //email
  const emailIn = screen.getByPlaceholderText("Email", { exact: false });
  // samething can be done using userEvent
  userEvent.type(emailIn, "something");

  //pass
  const passIn = screen.getByPlaceholderText("Password", { exact: false });
  // samething can be done using userEvent
  userEvent.type(passIn, "something");

  //email
  const phoneIn = screen.getByPlaceholderText("Phone", { exact: false });
  // samething can be done using userEvent
  userEvent.type(phoneIn, "something");

  //expect
  expect(btnElement).toBeEnabled();
  //clicking btn
  userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
});

//form validation
test("Validating inputs", () => {
  render(<SignUp />);
  userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
  nameValidate();
  userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
  emailValidate();
  userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
  passValidate();
  userEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
  phoneValidate();
});
function nameValidate() {
  return expect(screen.getByPlaceholderText("Name")).toHaveAttribute("required");
}
function emailValidate() {
  return expect(screen.getByPlaceholderText("Email")).toHaveAttribute("required");
}
function passValidate() {
  return expect(screen.getByPlaceholderText("Password")).toHaveAttribute("required");
}
function phoneValidate() {
  return expect(screen.getByPlaceholderText("Phone")).toHaveAttribute("required");
}
