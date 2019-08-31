import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
   dishes: Dish [] = Dishes;
  constructor() { }

  ngOnInit() {
  }

}
