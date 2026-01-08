
import { GoogleGenAI, Type } from "@google/genai";
import { BinStatus } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRecyclingInsight = async (status: BinStatus): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, one-sentence recycling or waste reduction tip based on this bin status: 
        Bin Type: ${status.type}, 
        Fill Level: ${status.fillLevel}%, 
        Temperature: ${status.temperature}°C. 
        Keep it encouraging and practical.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });

    return response.text?.trim() || "Compact your waste to save space and reduce collection frequency.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ensure plastic containers are rinsed before disposal for better recycling efficiency.";
  }
};

export interface WasteAnalysis {
  item: string;
  category: 'Plastic' | 'Paper' | 'Organic' | 'General' | 'Electronic';
  recyclable: boolean;
  instruction: string;
}

export const analyzeWasteImage = async (base64Image: string): Promise<WasteAnalysis> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64Image
          }
        },
        {
          text: "Identify the item in this image and determine which waste category it belongs to (Plastic, Paper, Organic, General, Electronic). Also provide a brief recycling instruction. Respond in JSON format."
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            item: { type: Type.STRING },
            category: { type: Type.STRING, enum: ['Plastic', 'Paper', 'Organic', 'General', 'Electronic'] },
            recyclable: { type: Type.BOOLEAN },
            instruction: { type: Type.STRING }
          },
          required: ['item', 'category', 'recyclable', 'instruction']
        }
      }
    });

    return JSON.parse(response.text || '{}') as WasteAnalysis;
  } catch (error) {
    console.error("Waste Analysis Error:", error);
    throw error;
  }
};
