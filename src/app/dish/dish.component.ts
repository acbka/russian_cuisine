import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish';
import { Dishes } from '../dishes';
import { Categoriescolors } from '../categoriescolors';
import { Categories } from '../categories';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  
   @Input() dish;
   @Input() ingredients: string = "display"; // <!--здесь!!-->
  constructor() { }

  ngOnInit() {
  }

}
