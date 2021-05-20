import { IQuestionBase } from './questionBase.interface';

export interface IQuestionYesNo extends IQuestionBase {
  /**
   * answer for yes no is true for yes and false for no
   */
  ans: boolean;
}
