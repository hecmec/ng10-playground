import { Injectable } from '@angular/core';
import questionDataJson from '../assets/color-questions.json';
import { Questionnaire } from './common/questionnaire.interface';

@Injectable({
  providedIn: 'root',
})
export class DataHelperService {
  questionnaire: Questionnaire = questionDataJson as Questionnaire;

  constructor() {}

  /**
   * Returns the questions from the local json file
   * @returns
   */
  public getQuestionnaire(): Questionnaire {
    return this.questionnaire;
  }
}
