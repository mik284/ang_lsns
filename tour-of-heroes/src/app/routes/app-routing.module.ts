import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../page/heroes/heroes.component';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
