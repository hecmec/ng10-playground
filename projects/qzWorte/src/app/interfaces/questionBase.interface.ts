type QuestionTemplateType =
  | 'none'
  | 'simple'
  | 'textLeftImageRight'
  | 'imageLeftTextRight'
  | 'TextOverImage'
  | 'textAudio';

export interface IQuestionBase {
  type: string;
  options: IQuestionOptions;
  /**
   * legacy qestion
   * if an item has this field and not qst_elements.quest, then we create the new field on the fly
   */
  qst: string;
  /**
   * question template
   */
  qst_tmplName: QuestionTemplateType;
  /**
   * question and question images
   */
  qst_elements: IQuestionElements;
  /**
   * split-1-1, or split-2-1 etc
   */
  questClass: string;
  /**
   * weight is the point value for this question. It is between 0 and 20
   */
  weight: number;
  /**
   * This is an explation for the QA
   */
  expl: string;
  /**
   * A link for more information. This is behind a "more info" text shown on quest evaluation
   */
  infoLink: string;
  wortCount: number;
}

export interface IQuestionOptions {
  ignoreCase: boolean;
  ignoreAccents: boolean;
  maxWrongLetters: number;
}

export interface IQuestionElements {
  /**
   * The question text for most items
   */
  quest: string;
  /**
   * first image, shown on question
   */
  imgUrl: string;
  /**
   * second image, shown on answer
   */
  imgUrl2: string;
  audioUrl: string;
  audioUrl2: string;
}
