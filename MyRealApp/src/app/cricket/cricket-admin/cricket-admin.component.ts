import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-cricket-admin',
  templateUrl: './cricket-admin.component.html',
  styleUrls: ['./cricket-admin.component.css']
})
export class CricketAdminComponent implements OnInit {

  constructor(private cricketService : CricketService) { }

  ngOnInit() {
  }
  updateScore(score){
    this.cricketService.updateScore(parseInt(score)).subscribe();
  }
}
