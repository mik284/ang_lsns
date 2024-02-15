import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    return heroes;
  }
}
