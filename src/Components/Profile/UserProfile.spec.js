import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import UserProfile from "./UserProfile";
//checking initial conditions
test("Initial conditions for addproduct form", () => {
  render(<UserProfile />);
  //   @assert
  //heading
  const headingElement = screen.getByRole("heading", {
    name: /My Profile/i,
  });
  expect(headingElement).toBeInTheDocument();
  //btn
  const btnElement = screen.getByRole("button", {
    name: "Logout",
    exact: false,
  });
  expect(btnElement).toBeInTheDocument();
  //expect(btnElement).toBeDisabled();
  //input field present
  
});
//enable btn when type in input


