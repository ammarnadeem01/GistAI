# GIST AI - Article Summarizer

GIST AI is a web application that allows users to input a URL of an article and receive a summarized version based on the desired length. The summarization is powered by AI, ensuring concise and accurate results.

## Features

- **URL Input:** Enter any article URL to fetch and summarize the content.
- **Summarization Range:** Choose from short, medium, or detailed summaries.
- **Responsive UI:** User-friendly and responsive design for both desktop and mobile devices.
- **AI-Powered Summarization:** Utilizes Gemini API for generating accurate summaries.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Web Scraping:** Axios, jsdom, Puppeteer
- **AI Integration:** Gemini API

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ammarnadeem01/gist-ai.git
   cd gist-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the server directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

5. **Run the backend server:**
   ```bash
   node index.js
   ```
   The backend will run at `http://localhost:3000`.

## Usage

1. **Enter the article URL** in the input field.
2. **Select the summarization range** from the dropdown (Short, Medium, Detailed).
3. **Click the 'Summarize' button** to fetch and display the summary.

## API Endpoints

- **POST** `/summarize`
  - **Request Body:** `{ url: "article_url", range: "short|medium|detailed" }`
  - **Response:** `{ summary: "summarized_text" }`

**GIST AI** - Simplifying articles, one summary at a time. 🚀

