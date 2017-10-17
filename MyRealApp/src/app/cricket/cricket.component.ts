import { Component, OnInit } from '@angular/core';

import { ServerSocketService } from './server-socket.service';
import { Subscription } from 'rxjs/Subscription'
import { CricketService } from './cricket.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  
  constructor(private cricketService : CricketService) { }
  ngOnInit() {
  }

}
