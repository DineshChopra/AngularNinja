import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  constructor(private service : HeroService){}
  heroSubscription;
  ngOnInit(){
    heroSubscription = service.getHeroes().subscribe(
      res => this.heroes = res;
    );
  }

  ngOnDestroy(){
    if(){
      let  a;
    }
    console.log(a);
    this.heroSubscription.unsubscribe();
  }

}
