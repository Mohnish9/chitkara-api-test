import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config({quiet: true});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function askAI(question) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: question + " (Answer in a single word)",
  });

  return response.text;
}