import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBaseModel } from './model/question-base.model';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class HeroDynamicFormComponent implements OnInit {

  @Input() questions: QuestionBaseModel<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService) {  }
 
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
