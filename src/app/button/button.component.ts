import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
   dishes : Dish [] = Dishes;

   @Input() dish;
   disabled;;

   onClick(){
      this.dish.selected = !this.dish.selected;
      this.dishes = Dishes.filter(dish => dish.selected == true);
      if (this.dishes.length == 2){
         if(this.dish.selected =false){
            this.disabled = false;
         }
      }
      console.log(this.dishes.length)
   }

  constructor() { }

  ngOnInit() {
  }

}
