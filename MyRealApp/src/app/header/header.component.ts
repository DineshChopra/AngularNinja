import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/service/hero.service';
import { Store } from '@ngrx/store';
import { Hero } from '../hero/hero';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store : Store<{heroList : {heroes : Hero[]}}>) { }
  private heroCount : number;
  ngOnInit() {
    this.store.select('heroList').subscribe(
      (data) => {
        this.heroCount = data.heroes.length;
      }
    )
  }

}
