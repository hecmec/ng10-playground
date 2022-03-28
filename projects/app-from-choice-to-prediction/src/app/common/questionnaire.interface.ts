import { Category } from './category.interface';
import { Question } from './question.interface';
import { TextLabel } from './textLabel.interface';

export interface Questionnaire {
  categories: Category[];
  questions: Question[];
  texts: TextLabel[];
}
