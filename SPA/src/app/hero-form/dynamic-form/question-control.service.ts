import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBaseModel } from './model/question-base.model';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBaseModel<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}