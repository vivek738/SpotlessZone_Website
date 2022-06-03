// import React from "react";
// import { configure } from "enzyme";
// import { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import Homepage from "../../../src/Components/Homepage/Homepage";
// const assert = require("assert");
// const { Given, When, Then, Before, After } = require("@cucumber/cucumber");

// // Configures Enzyme Adapter
// configure({ adapter: new Adapter() });

// Given("the DOM", function () {
//   const { JSDOM } = require("jsdom");
//   const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
//   const { window } = jsdom;
//   global.window = window;
//   global.document = window.document;
// });

// When("I shallow render a React component called: HomePage", function () {
//   this.wrapper = shallow(<Homepage />);
// });

// Then(
//   "my app should contain the words: Providing the Best Services for Our Customers",
//   function () {
//     assert(
//       this.wrapper.contains("Providing the Best Services for Our Customers")
//     );
//   }
// );
