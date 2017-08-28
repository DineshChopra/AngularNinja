import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
    selector : 'app-dynamic',
    template : `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>    
    `
})
export class DynamicComponent{
    questions: any[];
    constructor(questionService : QuestionService){
       this.questions = questionService.getQuestions();
    }
}