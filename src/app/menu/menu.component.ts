import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { categoriesProperties } from '../categoriesProperties';
import { Categories } from '../categories';
import { Properties } from '../properties';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   dishes : Dish [] = Dishes;
   category = Categories;
   numCategories : number [] = [];
   properties : Map<Categories, Properties> = categoriesProperties;
   cat: string;
   numCat : number;

constructor(private route: ActivatedRoute,) { }

ngOnInit() {
         // подписаться на уведомления при изменении параметров в адресной строке
   // params - это новый массив параметров (идущих после /dishes/)
   this.route.params.subscribe(params => {
      // у нас в параметрах только один - назвается он category
      // + перед выражением преобразует string в number
      this.numCat = +params.category;
      this.cat = Categories[params.category];
      // фильтруем массив, передав  в него полученную категрию
      this.dishes = Dishes.filter(dish => dish.category == this.numCat);
   });

   for(let x in this.category){
      if(!isNaN(Number(x))){
         this.numCategories.push(Number(x));
      }      
   }
}

}
