import { QuestionBaseModel } from './question-base.model';

export class DropdownQuestion extends QuestionBaseModel<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}