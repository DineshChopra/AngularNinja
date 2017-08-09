import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-header',
  template : `
              <div></div>
              <h1></h1>
              
              
              `,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Header component';
  hero = 'Ram';
  heroObj : Hero = {
        id : 1, 
        name : 'Sham'
    };
  

  heroes = HEROES;
  constructor() { }

  ngOnInit() {
    this.title = 'Updated Title'
  }
  selectedHero : Hero;
  onSelect(hero : Hero){
    this.selectedHero = hero;
  }
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
