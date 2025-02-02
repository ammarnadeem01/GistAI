import { useState } from "react";
import axios from "axios";

export default function App() {
  const [url, setUrl] = useState("");
  const [range, setRange] = useState("medium");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = () => {
    if (!url) return;
    setLoading(true);
    axios
      .post("http://localhost:3000/summarize", { url, range })
      .then((response) => {
        console.log(response);
        const res = response.data.data;
        setSummary(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-blue-200">
        <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-4">
          GIST AI
        </h1>
        <p className="text-center text-blue-900 text-lg mb-6">
          Summarize Any Article Instantly
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter article URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border-2 border-blue-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-400 text-sm placeholder-gray-400"
          />

          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="w-full border-2 border-blue-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-400 text-sm bg-white text-gray-700"
          >
            <option value="short">Short Summary</option>
            <option value="medium">Medium Summary</option>
            <option value="long">Detailed Summary</option>
          </select>

          <button
            onClick={handleSummarize}
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold p-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600 transition transform hover:scale-105 disabled:bg-gray-400"
          >
            {loading ? "Summarizing..." : "Get Summary"}
          </button>
        </div>

        {summary && (
          <div className="mt-6 p-6 border-2 border-blue-200 rounded-2xl bg-gray-50 shadow-inner">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Summary:</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
