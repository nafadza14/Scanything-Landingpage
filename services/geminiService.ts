
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

export class ScanythingAiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async analyzeIngredients(base64Image: string): Promise<AnalysisResult> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image.split(',')[1] || base64Image,
              },
            },
            {
              text: `Analyze the ingredient list from this product image using Scanything AI logic. 
              Identify individual ingredients and explain their safety, risks, and health implications.
              Determine if it's a food product or skincare based on the labels.
              Return the data in the following JSON format:
              {
                "productName": "Name or type of product",
                "overallScore": number (0-100),
                "summary": "Quick one-sentence overview",
                "ingredients": [
                  {
                    "name": "Ingredient Name",
                    "safetyScore": "safe" | "warning" | "danger",
                    "description": "Short explanation of what it is",
                    "riskDetails": "Specific risks if any",
                    "allergens": ["list of allergens if applicable"],
                    "skinCompatibility": ["Compatible skin types if skincare"]
                  }
                ]
              }`,
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            productName: { type: Type.STRING },
            overallScore: { type: Type.NUMBER },
            summary: { type: Type.STRING },
            ingredients: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  safetyScore: { type: Type.STRING },
                  description: { type: Type.STRING },
                  riskDetails: { type: Type.STRING },
                  allergens: { type: Type.ARRAY, items: { type: Type.STRING } },
                  skinCompatibility: { type: Type.ARRAY, items: { type: Type.STRING } },
                },
              },
            },
          },
        },
      },
    });

    const result = JSON.parse(response.text || '{}');
    return result as AnalysisResult;
  }
}
