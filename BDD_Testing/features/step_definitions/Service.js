// const { expect } = require("chai");
// const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
// const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
// const { delay } = require("../utils/delay");

// //backend connect
// Given("Test Service Add functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/add-services");

//   // ..............................................................

//   await driver
//     .findElement(By.id("serviceCategoryName"))
//     .sendKeys("Commercial Services");
//   await driver.findElement(By.id("serviceName")).sendKeys("Testing Service");
//   await driver
//     .findElement(By.id("exampleFormControlTextarea1"))
//     .sendKeys(
//       "This  is the new service belongs to commercial service category"
//     );
//   await driver.findElement(By.id("servicePrice")).sendKeys("300");
//   await driver
//     .findElement(By.id("image"))
    
//     .sendKeys("C:\\Users\\DELL\\Downloads\\phonecall.png");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("submitBtn")).click();

//   // ..............................................

//   await driver.wait(until.elementLocated(By.id("displayServices")), 30000);





//   expect(await driver.wait(until.elementLocated(By.id("displayServices"))));
//   // await driver.quit();
// });

