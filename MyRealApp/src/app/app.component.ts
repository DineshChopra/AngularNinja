import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }
  ngOnInit(){
    var config = {
      apiKey: "AIzaSyCaC_FaaATmnxux3d0qrBSg1gzuKQ4Ky64",
      authDomain: "myrealapp-9e947.firebaseapp.com",
    };
    firebase.initializeApp(config);
  }
  changeLang(language: string) {
  }
}
