import { Component, OnInit } from '@angular/core';
import { TestModel } from './test.model';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new TestModel('Ram', 10, '');
  onSubmit(){
    console.log(this.model);
  }
  hobbies = ['Cricket', 'Football'];

}
