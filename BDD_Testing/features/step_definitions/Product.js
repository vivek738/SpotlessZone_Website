// const { expect } = require("chai");
// const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
// const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
// const { delay } = require("../utils/delay");

// //backend connect
// Given("Test Product Add functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/addProduct");

//   // ..............................................................

//   await driver.findElement(By.id("pname")).sendKeys("New Product");
//   await driver.findElement(By.id("pprice")).sendKeys("100");
//   await driver
//     .findElement(By.id("exampleFormControlTextarea1"))
//     .sendKeys("This  is the new product");
//   await driver.findElement(By.id("pqty")).sendKeys("12");
//   await driver
//     .findElement(By.id("image"))
//     .sendKeys("C:\\Users\\CEH RAMESH\\Desktop\\ImagesReactApp\\restro.jpg");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("submitBtn")).click();

//   // ..............................................

//   await driver.wait(until.elementLocated(By.id("displayProducts")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("displayProducts"))));
//   // await driver.quit();
// });

// // //backend connect
// // Given("Given Test Products View ", { timeout: 30000 }, async function () {
// //   let driver = await new Builder().forBrowser("chrome").build();
// //   await driver.get("http://localhost:3000/");

// //   // ..............................................................

// //   await driver.findElement(By.id("pname")).expect("Product Name")

// //   await driver.findElement(By.id("pprice")).sendKeys("100");
// //   await driver.findElement(By.id("pdesc")).sendKeys("This  is the new product");
// //   await driver.findElement(By.id("pqty")).sendKeys("12");
// //   await driver.sleep(delay);
// //   await driver.findElement(By.id("submitBtn")).click();

// // //   ..............................................

// //   await driver.wait(until.elementLocated(By.id("productDisplay")), 30000);
// //   expect(await driver.wait(until.elementLocated(By.id("productDisplay"))));
// //   // await driver.quit();
// // });

// // Given("Test login functionality", { timeout: 30000 }, async function () {
// //   let driver = await new Builder().forBrowser("chrome").build();
// //   await driver.get("http://localhost:3000/");
// //   await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
// //   await driver.findElement(By.id("password")).sendKeys("test1234");
// //   await driver.sleep(delay);
// //   await driver.findElement(By.id("loginBtn")).click();

// //   await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
// //   expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
// //   // await driver.quit();
// // });
