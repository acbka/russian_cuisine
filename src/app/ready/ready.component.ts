import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Dishes } from '../dishes';
import { ReadySet } from '../readyset';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { readySets } from '../readysets';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})

export class ReadyComponent implements OnInit {

   order : Order;
   ready = readySets;

   isDairyFree(set:Dish[]) : boolean {
      return set.every(x => x.dairyFree);
   }

   contains(set:Dish[], what) : boolean {
      return set.filter(x => x.ingredients.filter(y => y.includes(what)).length !=0).length != 0; //BeefFree - false
   }

   setOrder(dishes : Dish[]) : void {
      this.orderService .setOrder(dishes);
   }

  constructor(private orderService : OrderService) { }

  ngOnInit() {
   this.orderService.getOrder().subscribe(x=>this.order = x);
  }

  /*
   iBeef(set:Dish[]) : boolean {
      return this.contains(set, "beef");
   }

   isPork(set:Dish[]) : boolean {
      return this.contains(set, "pork");   
   }

   isFish(set:Dish[]) : boolean {
      return this.contains(set, "fish");
   }
*/
}
