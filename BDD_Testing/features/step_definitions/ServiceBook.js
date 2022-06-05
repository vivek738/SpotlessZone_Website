const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

//backend connect
Given("Test Service Book functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/book-services");

  // ..............................................................

  await driver
    .findElement(By.id("serviceCategoryName"))
    .sendKeys("Commercial Services");
  await driver.findElement(By.id("serviceName")).sendKeys("Testing Service");
  await driver
    .findElement(By.id("exampleFormControlTextarea1"))
    .sendKeys(
      "Hawa Chowk, KTM"
    );
  await driver.findElement(By.id("servicePrice")).sendKeys("300");
  await driver.sleep(delay);
  await driver.findElement(By.id("submitBtn")).click();

});

