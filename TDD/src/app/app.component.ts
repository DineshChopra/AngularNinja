import { Component } from '@angular/core';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private userService : UserService){}
  sum(num1 : number, num2 : number) : number{
    return num1 + num2;
  }
}
