import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';

@Component({
  selector: 'app-c-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
