import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import routeConfig from './routes';



@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
