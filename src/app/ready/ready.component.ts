import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Dishes } from '../dishes';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent implements OnInit {

   ready: Dish [][] = [
      [
         this.getDish(102), this.getDish(103), 
         this.getDish(205), this.getDish(207),
         this.getDish(302), this.getDish(303),
         this.getDish(402), this.getDish(506)
      ],
      [
         this.getDish(101), this.getDish(103), 
         this.getDish(206), this.getDish(202),
         this.getDish(302), this.getDish(305),
         this.getDish(401), this.getDish(506)
      ],
      [
         this.getDish(101), this.getDish(103), 
         this.getDish(201), this.getDish(202),
         this.getDish(302), this.getDish(305),
         this.getDish(401), this.getDish(506)
      ]
   ]

   getDish(id:number) : Dish {
      let result: Dish = Dishes.filter( x=> x.id == id)[0];
      return result;
   }

   isDairyFree(set:Dish[]) : boolean {
      return set.every(x => x.dairyFree);
   }

  constructor() { }

  ngOnInit() {
  }

}
