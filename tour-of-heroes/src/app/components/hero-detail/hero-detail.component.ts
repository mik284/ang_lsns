import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/heroservice/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    // The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
}
