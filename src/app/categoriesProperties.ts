import { Categories } from './categories';
import { Properties } from './properties';

export let categoriesProperties : Map<Categories, Properties> = new Map([
   [Categories.Soup, {color:'yellow', count: 2}],
   [Categories.Main, {color:'red', count: 2}],
   [Categories.Garnish, {color:'#85e785', count: 2}],
   [Categories.Salad, {color:'blue', count: 1}],
   [Categories.Dessert, {color:'pink', count: 1}], 
]);
