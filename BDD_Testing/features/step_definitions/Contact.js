// const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

//backend connect
Given("Given Test Message Post functionality", { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/contactus");

    // ..............................................................

    await driver
        .findElement(By.id("fname"))
        .sendKeys("Testing Buggati");
    await driver.findElement(By.id("serviceName")).sendKeys("Testing Service");
    await driver.findElement(By.id("email")).sendKeys("dipikabuggati6@gmail.com");

    await driver
        .findElement(By.id("description"))
        .sendKeys(
            "This  is the query message related to selected services"
        );
    await driver.findElement(By.id("phone")).sendKeys("9876543255");
    await driver.sleep(delay);
    await driver.findElement(By.id("submitBtn")).click();


});

