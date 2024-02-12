import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   HousingLocationComponent,
  //   FormsModule,
  //   HttpClientModule,
  // ],
  template: `
    <section>
      {{ cityTitle }}
      <button (click)="clickFn('hello')">Click me</button>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
        (cityTitle)="cityTitle = $event"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  // housingService: HousingService = inject(HousingService);
  cityTitle = 'Kiambu';

  // filteredLocationList holds the values that match the search criteria entered by the user.
  filteredLocationList: HousingLocation[] = [];

  // constructor(housingService: HousingService) {
  //   this.housingLocationList = housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.filteredLocationList;
  // }
  constructor(housingService: HousingService) {
    housingService.getAllHousingLocations().subscribe({
      next: (housedata) => {
        this.housingLocationList = housedata;
        this.filteredLocationList = housedata;
      },
      error: (error) => {
        console.log((error as Error).message);
      },
    });
  }

  ngOnInit(): void {
    this.filteredLocationList = this.housingLocationList;
  }

  clickFn(message: string): void {
    console.log('message', message);
    alert('I have been clicked');
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  // ngOnDestroy(housingService: HousingService) {
  //   housingService.getAllHousingLocations().subscribe().unsubscribe();
  // }
}
