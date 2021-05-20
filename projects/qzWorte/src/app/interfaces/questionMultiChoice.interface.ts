import { IQuestionBase } from './questionBase.interface';

export interface IQuestionMultiChoice extends IQuestionBase {
  ansList: IAnswerList;
}

export interface IAnswerList {
  ans: string;
  is: boolean;
  fbko: string;
}
