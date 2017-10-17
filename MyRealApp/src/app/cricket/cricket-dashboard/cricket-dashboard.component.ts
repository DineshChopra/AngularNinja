import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-cricket-dashboard',
  templateUrl: './cricket-dashboard.component.html',
  styleUrls: ['./cricket-dashboard.component.css']
})
export class CricketDashboardComponent implements OnInit {

  constructor(private cricketService : CricketService) { }
  scoreEventObj = {};
  ngOnInit() {
    this.cricketService.updateScoreEvent.subscribe(
      data => {
        this.scoreEventObj = data;
      }
    );
  }

}
