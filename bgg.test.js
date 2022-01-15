const { Builder, Capabilities, By, until } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Test #1 Log In To Account //

beforeAll(async () => {
  await driver.get("https://boardgamegeekstore.com/");
});

await driver.findElement(By.xpath("(//div[text]()=Account])"));

await account.click();

await driver.findElement(By.xpath("(//div[text]()=customer [email]])"));

await driver.findElement(By.xpath("(//div[text]()=customer [password]])"));

await submit.click();

afterAll(async () => {
  await driver.quit();
});

//Test #2 Dropdown Menus//

beforeAll(async () => {
  await driver.get("https://boardgamegeekstore.com/");
});

describe("Board Game Geek Footer Drop Down", () => {
  it("Can click the first option", async () => {
    let dropDown = await driver.findElement(
      By.xpath('(//div[text]()="collections/promos"])')
    );

    await promos.click();
    await all.click();
  });

  it("Can click the first option", async () => {
    let dropDown = await driver.findElement(
      By.xpath('(//div[text]()="collections/accessories"])')
    );

    await promos.click();
    await all.click();
  });

  it("Can click the first option", async () => {
    let dropDown = await driver.findElement(
      By.xpath('(//div[text]()="collections/games"])')
    );

    await promos.click();
    await all.click();
  });

  it("Can click the first option", async () => {
    let dropDown = await driver.findElement(
      By.xpath('(//div[text]()="collections/clothing"])')
    );

    await promos.click();
    await all.click();
  });

  afterAll(async () => {
    await driver.quit();
  });

  //Test #3 Footer//

  beforeAll(async () => {
    await driver.get("https://boardgamegeekstore.com/");
  });

  describe("Board Game Geek Footer Categories", () => {
    it("Can click the first category", async () => {
      let footer = await driver.findElement(
        By.xpath('(//div[text]()="about us"])')
      );
    });

    it("Can click the second category", async () => {
      let footer = await driver.findElement(
        By.xpath('(//div[text]()="news"])')
      );
    });

    it("Can click the third category", async () => {
      let footer = await driver.findElement(By.xpath('(//div[text]()="FAQ"])'));
    });

    afterAll(async () => {
      await driver.quit();
    });
  });
});

// Test #4 Search Bar//

beforeAll(async () => {
  await driver.get("https://boardgamegeekstore.com/");
});

await driver.findElement(By.css('[name = "q"]')).sendKeys("...\n");

afterAll(async () => {
  await driver.quit();
});

// Test #5 Checkout //

beforeAll(async () => {
  await driver.get("https://boardgamegeekstore.com/");
});

await driver.findElement(By.css('[name = "q"]')).sendKeys("0\n");

await driver.findElement(By.xpath('(//div[text]()="image.boofs"])'));

await imageBoofs.click();

await driver.findElement(By.css('[name = "add"]'));

await AddToCart.click();

await viewCart.click();

await idAgree.click();

await driver.findElement(By.xpath('(//div[text]()="checkout"])'));

await checkOut.click();

afterAll(async () => {
  await driver.quit();
});
