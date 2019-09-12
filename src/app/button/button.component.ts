import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
   dishes : Dish [] = Dishes;
   order : Order;
   buttonText : string = "";
   @Input() dish;
   

   onClick(){
      this.dish.selected = !this.dish.selected;
      this.buttonText = !this.dish.selected ? 'Add to order' : 'Remove';
      if(this.dish.selected) {
         this.orderService.addDish(this.dish);
      } else {
         this.orderService.removeDish(this.dish);
      }
   }

  constructor( private orderService: OrderService) { }

  ngOnInit() {
   this.buttonText = !this.dish.selected ? 'Add to order' : 'Remove'; 
   this.orderService.getOrder().subscribe(x=>this.order = x);
  }

}
