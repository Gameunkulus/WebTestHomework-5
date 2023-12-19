const {
  clickElement,
  putText,
  clickElementText,
  getText
} = require("./lib/commands.js");
const {
  generateName
} = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

describe("Homework", () => {
  test("The first test'", async () => {
    await clickElement(page, '.page-nav > a:nth-child(5)');
    await clickElement(page, '.movie-seances__time');
    await clickElement(page, '.buying-scheme__row > span:nth-child(2)');
    await clickElement(page, 'button.acceptin-button');
    await clickElement(page, 'button.acceptin-button');
    const actual = await getText(page, 'p.ticket__hint');
    expect(actual).toContain(
      'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
  });

  test("The first test'", async () => {
    await clickElement(page, '.page-nav > a:nth-child(5)');
    await clickElement(page, '.movie-seances__time');
    await clickElement(page, '.buying-scheme__row > span:nth-child(4)');
    await clickElement(page, '.buying-scheme__row > span:nth-child(5)');
    await clickElement(page, 'button.acceptin-button');
    await clickElement(page, 'button.acceptin-button');
    const actual = await getText(page, 'p.ticket__hint');
    expect(actual).toContain(
      'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
  });

  
  test("Sad path", async () => {
  await clickElement(page, '.page-nav > a:nth-child(5)');
  await clickElement(page, 'a.movie-seances__time');
  await clickElement(page, '.buying-scheme__row > span:nth-child(5)');
  expect(String(await page.$eval("button", (button) => {
    return button.disabled;
  }))).toContain("true");
});
});