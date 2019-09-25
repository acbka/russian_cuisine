import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Dishes } from '../dishes';
import { ReadySet } from '../readyset';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { readySets } from '../readysets';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../categories';
import { Properties } from '../properties';
import { categoriesProperties } from '../categoriesProperties';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})

export class ReadyComponent implements OnInit {

   order : Order;
   ready = readySets;
   category = Categories;
   numCategories : number [] = [];
   properties : Map<Categories, Properties> = categoriesProperties;

   getDishOfCategory(cat: Categories, set: ReadySet): Dish[] {
      return set.dishes.filter(z => z.category === cat);
    }

   isDairyFree(set:Dish[]) : boolean {
      return set.every(x => x.dairyFree);
   }

   contains(set:Dish[], what) : boolean {
      return set.filter(x => x.ingredients.filter(y => y.includes(what)).length !=0).length != 0; //BeefFree - false
   }

   setOrder(set : ReadySet) : void {
      this.ready.forEach(s => s.selected = false);
      set.selected = true;
      this.orderService .setOrder(set.dishes);
   }

  constructor(private orderService : OrderService) { }

  ngOnInit() {
   this.orderService.getOrder().subscribe(x=>this.order = x);

   for(let x in this.category){
      if(!isNaN(Number(x))){
         this.numCategories.push(Number(x));
      }      
   }
   window.scrollTo(0,0);
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
