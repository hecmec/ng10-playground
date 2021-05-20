import { IQuestionBase } from './questionBase.interface';

export interface IQuestionText extends IQuestionBase {
  /**
   * answer can be a string or a string with alternatives
   * like ['USA', 'United States','United States of America']
   */
  ans: string | string[];
}
