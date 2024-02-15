import { Injectable } from '@angular/core';
import { HEROES } from '../../mocks/mock-heroes';
import { Hero } from '../../interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messageservice/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
}
