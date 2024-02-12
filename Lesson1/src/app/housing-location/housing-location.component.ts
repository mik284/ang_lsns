import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housingLocation';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <section class="listing">
      <form>
        <input
        name="text"
          ngModel=""
          (ngModelChange)="(handleFormChange($event))"
          type="text"
          placeholder="Filter by city"
        />
      </form>
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More!</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  @Output() cityTitle = new EventEmitter();


  handleFormChange(e:any) {
    this.cityTitle.emit(e)
  }
}
