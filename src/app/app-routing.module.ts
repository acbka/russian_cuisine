import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'soup',   component: DishesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
