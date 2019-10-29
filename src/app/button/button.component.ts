import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
   dishes : Dish [] = [];
   order : Order;
   buttonText : string = "";
   ready = [];
   
   @Input() dish;
   
   onClick(){
      this.dish.selected = !this.dish.selected;
      this.buttonText = !this.dish.selected ? 'Add to order' : 'Remove';
      if(this.dish.selected) {
         this.orderService.addDish(this.dish);
      } else {
         this.orderService.removeDish(this.dish);
      }
      this.ready.forEach(s => s.selected = false);
   }

  constructor( private orderService: OrderService, private dishService: DishService) { }

  ngOnInit() {
   this.buttonText = !this.dish.selected ? 'Add to order' : 'Remove'; 
   this.dishService.getDishes().subscribe(x => this.dishes = x);
   this.dishService.getReadySets().subscribe(x => this.ready = x);
   this.orderService.getOrder().subscribe(x=>this.order = x);
  }

}