import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mocks/mock-heroes';
import { HeroService } from '../../service/heroservice/hero.service';
import { MessageService } from '../../service/messageservice/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  //  hero: Hero = {id: 1, name: "vodaphone"}
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  // selectedHero?: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected ${hero.name} hero.`);
  // }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  // NB: The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously.
}
