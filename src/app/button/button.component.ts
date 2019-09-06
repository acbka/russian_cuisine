import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { count } from 'console';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
   dishes : Dish [] = Dishes;
   count : number = 0;

   @Input() dish;
   disabled;
   

   onClick(){
      this.dish.selected = !this.dish.selected;

      this.dishes = Dishes.filter(dish => dish.selected == true);
      if (this.dishes.length == 2){
      }
      
      console.log(this.dishes.length)
   }

  constructor() { }

  ngOnInit() {
  }

}
