import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

   transform(dishes, value): any {
      return dishes.filter(dish =>
        dish.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }
  }
