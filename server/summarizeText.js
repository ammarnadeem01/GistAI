import { GoogleGenerativeAI } from "@google/generative-ai";
export async function summarizeText(article, range) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let prompt = `Summarize the article content into strictly slightly less or equal to ${range} words. If the original article is less than required range , then return the original article itself. No opinion should be added of your own. Only the keypoints of the article should be added in sentence form, not bullet points. Here is the artcile : """${article}"""`;
    const result = await model.generateContent(prompt);
    return result;
  } catch (error) {
    return null;
  }
}
