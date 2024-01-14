const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;
const {
    Given,
    When,
    Then,
    Before,
    After
} = require('cucumber');
const {clickElement, getText} = require("../../lib/commands.js");

Before(async function () {
    const browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

Given("user is on page {string}", async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return await this.page.goto(`${string}`, {
        setTimeout: 5000,
    });
});


When("user select date;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, ".page-nav > a:nth-child(5)");
});

When("user select time;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, '.movie-seances__time');
});

When("user select one seat;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, ".buying-scheme__wrapper div:nth-child(2) span:nth-child(1)");
});

When("user select same seat;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, ".buying-scheme__wrapper div:nth-child(2) span:nth-child(1)");
});

When("user select two seats;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, ".buying-scheme__wrapper div:nth-child(7) span:nth-child(2)");
    return await clickElement(this.page, ".buying-scheme__wrapper div:nth-child(7) span:nth-child(3)");
});

When("user click booking button;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, `button.acceptin-button`);
});

When("user click accept code button;", async function () {
    // Write code here that turns the phrase above into concrete actions
    return await clickElement(this.page, `button.acceptin-button`);
});

Then("user get text {string}", async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const actual = await getText(this.page, "p.ticket__hint");
    const expected = await string;
    expect(actual).contains(expected);
});

Then("button for booking is inactive {string}", async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const actual = String(
        await this.page.$eval("button", (button) => {
            return button.disabled;
        })
    );
    const expected = await string;
    expect(actual).contains(expected);
});