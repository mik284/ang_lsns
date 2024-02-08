import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, FormsModule],
  template: `
    <section>
      {{cityTitle}}
      <button (click)="clickFn('hello')">Click me</button>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
        (cityTitle)="cityTitle=$event"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  cityTitle ="Kiambu" ;

  

  constructor(housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLocations();
  }

  ngOn

  clickFn(message: string): void {
    console.log('message', message);
    alert('I have been clicked');
  }
}
