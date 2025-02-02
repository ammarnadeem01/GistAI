import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
app.use(cors());
dotenv.config({ path: "./config.env" });
import { scrapeDynamicPage } from "./scrapeDynamicPage.js";
import { scrapeArticle } from "./scrapeStaticPage.js";
import { summarizeText } from "./summarizeText.js";
app.use(express.json());
app.post("/summarize", async (req, res) => {
  try {
    let { url, range } = req.body;
    console.log(url, range);
    if (range === "short") range = "one-third of the original length";
    if (range === "medium") range = "about 40% of the original length";
    if (range === "long")
      range = "about 60% of the original length, keeping key details intact";

    if (!url) {
      res.status(400).json({
        status: "Failure",
        message: "URL is required.",
      });
    }
    let articleContent = await scrapeArticle(url);
    if (!articleContent) {
      articleContent = await scrapeDynamicPage(url);
      if (!articleContent) {
        const response = await axios.get(url, {
          headers: { "User-Agent": "Mozilla/5.0" },
        });
        articleContent = response.data;
      }
    }
    let summary = await summarizeText(articleContent, range);
    summary = summary.response.text();
    if (!summary) {
      res.status(404).json({
        status: "Failure",
        message: "No Article Found.",
      });
    }
    res.status(200).json({
      status: "Success",
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failure",
      message: error.message,
    });
  }
});
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
