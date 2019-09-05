import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { Dish } from '../dish';
import { Categoriescolors } from '../categoriescolors'
import { Categories } from '../categories';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
   dishes : Dish [] = Dishes;
   colors : Map<Categories, string> = Categoriescolors;




   constructor(
      private route: ActivatedRoute,
      private location: Location
   ) { }

  ngOnInit() {
    // подписаться на уведомления при изменении параметров в адресной строке
    // params - это новый массив параметров (идущих после /dishes/)
    this.route.params.subscribe(params => {
      // у нас в параметрах только один - назвается он category
      // + перед выражением преобразует string в number
      const category = +params.category;

      // фильтруем массив, передав  в него полученную категрию
      this.dishes = Dishes.filter(dish => dish.category == category);
    });
  }
  

}
