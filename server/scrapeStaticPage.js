import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export async function scrapeArticle(url) {
  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const dom = new JSDOM(response.data);
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (article) return article.textContent;
    return null;
  } catch (error) {
    return null;
  }
}
