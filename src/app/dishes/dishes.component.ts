import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { Categoriescolors } from '../categoriescolors'
import { Categories } from '../categories';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
   dishes: Dish [] = Dishes;
   colors : Map<Categories, string> = Categoriescolors;
   constructor() { }

  ngOnInit() {
     console.log(Categoriescolors)
  }

}
