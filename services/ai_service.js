const { GoogleGenAI } = require("@google/genai");
require("dotenv").config({ quiet: true });

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function askAI(question) {
  if (typeof question !== "string" || question.trim() === "") {
    throw new Error("AI question cannot be empty");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question + " (Answer in a single word)",
    });

    return response.text.trim().split(/\s+/)[0];
  } catch {
    throw new Error("AI service unavailable");
  }
}

module.exports = { askAI };
