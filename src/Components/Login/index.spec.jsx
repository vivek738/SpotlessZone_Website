import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./index";
import userEvent from "@testing-library/user-event";

//checking initial conditions
test("Initial conditions for login form", () => {
  render(<Login />);

  //   @assert
  //heading
  const headingElement = screen.getByText("login to your account", {
    exact: false,
  });
  expect(headingElement).toBeInTheDocument();

  //btn
  const btnElement = screen.getByRole("button", {
    name: "Sign In",
    exact: false,
  });
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toBeDisabled();

  //input field
  expect(screen.getByRole("textbox"));
});

//enable btn when type in input
test("Enable submit button on type", async () => {
  render(<Login />);
  const btnElement = screen.getByRole("button", {
    name: "Sign In",
    exact: false,
  });

  //email
  const emailIn = screen.getByPlaceholderText("email", { exact: false });
  // await fireEvent.change(emailIn, {target: {value: "something"}})

  // samething can be done using userEvent
  await userEvent.type(emailIn, "something");

  //pass
  const passIn = screen.getByPlaceholderText("password", { exact: false });
  await fireEvent.change(passIn, { target: { value: "" } });

  //expect
  expect(btnElement).toBeEnabled();

  //clicking btn
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));
});

//form validation
test("Validating inputs", () => {
  render(<Login />);
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));
  emailValidate();
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));
  passValidate();
  // expect(screen.getByRole("textbox")).toHaveAttribute("type", "email")
  // userEvent.click(screen.getByRole("button", { name: /Sign In/i }));
  // expect(screen.getByRole("textbox")).toHaveAttribute("type", "password")
});
function emailValidate() {
  return expect(screen.getByRole("textbox")).toHaveAttribute("required");
}
function passValidate() {
  return expect(screen.getByRole("textbox")).toHaveAttribute("required");
}
