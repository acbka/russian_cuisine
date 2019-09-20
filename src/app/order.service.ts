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
   category = Categories;
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

   setOrder(dishes : Dish[]) : void {
      this.clearOrder();
      dishes.forEach(dish => {
         dish.selected = true;
         this.order.addDish(dish);
      });
   }

   deselect(){
      for(let x in this.category){
         if(!isNaN(Number(x))){
            this.order.getCategoryArray(+x).forEach(dish => dish.selected = false)
         }      
      }
   }

   clearOrder() : void {
      this.deselect();
      this.order = new Order();
   }
}
