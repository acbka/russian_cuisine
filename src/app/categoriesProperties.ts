import { Categories } from './categories';
import { Properties } from './properties';

export let categoriesProperties : Map<Categories, Properties> = new Map([
   [Categories.Soups, {color:'yellow', count: 2}],
   [Categories.Mains, {color:'red', count: 2}],
   [Categories.Sides, {color:'#85e785', count: 2}],
   [Categories.Salads, {color:'blue', count: 1}],
   [Categories.Desserts, {color:'pink', count: 1}], 
]);
