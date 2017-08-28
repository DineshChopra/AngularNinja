import { QuestionBaseModel } from './question-base.model';

export class TextboxQuestion extends QuestionBaseModel<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}