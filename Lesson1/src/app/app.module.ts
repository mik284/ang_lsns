import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import routeConfig from './routes';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    HousingLocationComponent,
    HomeComponent,
    AppComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}
