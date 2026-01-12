
export interface IngredientAnalysis {
  name: string;
  safetyScore: 'safe' | 'warning' | 'danger';
  description: string;
  riskDetails?: string;
  allergens?: string[];
  skinCompatibility?: string[];
}

export interface AnalysisResult {
  productName: string;
  overallScore: number; // 0-100
  summary: string;
  ingredients: IngredientAnalysis[];
}
