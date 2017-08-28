import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBaseModel }     from './model/question-base.model';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBaseModel<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}