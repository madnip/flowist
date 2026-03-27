import { GoogleGenAI } from "@google/genai";

export async function generateSummary(jobTitle: string, skills: string[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not defined");
    return "Please configure your Gemini API key in the Secrets panel.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional resume summary for a ${jobTitle} with skills in ${skills.join(", ")}. Keep it under 300 characters.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
}

export async function optimizeExperience(description: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not defined");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Rewrite this resume experience description to be more professional and impact-oriented: "${description}". Keep it concise.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
}
