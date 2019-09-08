import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { Dish } from './dish';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   order : Order = new Order();
   
  constructor() { }

  getOrder(): Observable<Order> {
     return of(this.order);
  }

  addDish(dish : Dish):void {  
     this.order.addDish(dish);
  }
  removeDish(dish : Dish):void {
      this.order.removeDish(dish)
  }
  inOrder(dish : Dish) : boolean {
     return this.order.inOrder(dish);
  }
}
