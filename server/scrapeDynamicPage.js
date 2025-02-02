import puppeteer from "puppeteer";

export async function scrapeDynamicPage(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const content = await page.evaluate(() => {
      return document.body.innerText;
    });

    await browser.close();
    return content ? content : null;
  } catch (error) {
    return null;
  }
}
