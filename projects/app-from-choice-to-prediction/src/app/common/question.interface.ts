export interface Question {
  id: string;
  multiple: boolean;
  question: string;
  answers: Answer[];
}

interface Answer {
  code: string;
  text: string;
  weights: Weight[];
  ans4?: string;
}

interface Weight {
  cat: string;
  value: number;
}
