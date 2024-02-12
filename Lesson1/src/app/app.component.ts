import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HomeComponent, RouterModule, CommonModule, ReactiveFormsModule],
  template: ` <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <!-- <app-home></app-home> -->
      <!-- The routed views render in the <router-outlet>-->
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'default';
}