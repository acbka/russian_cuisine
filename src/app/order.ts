import { Dish } from './dish';
import { Categories } from './categories';

export class Order {
    id: number;
    date: Date;
    soup: Dish[];
    main: Dish[];
    garnish: Dish[];
    salad: Dish[];
    dessert: Dish[];

    customerName: string;
    customerPhone: string;
    customerAddress: string;
    deliveryDateTime: Date;

    constructor() {
      this.id = 0;
      this.date = new Date();
      this.soup = [];
      this.main = [];
      this.garnish = [];
      this.salad = [];
      this.dessert = [];
  
      this.customerName = "";
      this.customerPhone = "";
      this.customerAddress = "";
      this.deliveryDateTime = new Date();
   }
   getCount(cat : Categories) : number {
      switch (cat) {
         case Categories.Soup :
            return this.soup.length;
         case Categories.Main :
            return this.main.length;
         case Categories.Garnish :
            return this.garnish.length;
         case Categories.Salad :
            return this.salad.length;
         case Categories.Dessert :
            return this.dessert.length;
      }
   }
  
   addDish(dish : Dish) : void {  
      switch (dish.category) {
         case Categories.Soup :
            this.soup.push(dish);
            break;
         case Categories.Main :
            this.main.push(dish);
            break;
         case Categories.Garnish :
            this.garnish.push(dish);
            break;
         case Categories.Salad :
            this.salad.push(dish);
            break;
         case Categories.Dessert :
            this.dessert.push(dish);
      }
   }

   removeDish(dish : Dish) : void {  
      switch (dish.category) {
         case Categories.Soup :
            this.soup = this.soup.filter(x => x != dish);
            break;
         case Categories.Main :
            this.main = this.main.filter(x => x != dish);
            break;
         case Categories.Garnish :
            this.garnish = this.garnish.filter(x => x != dish);
            break;
         case Categories.Salad :
            this.salad = this.salad.filter(x => x != dish);
            break;
         case Categories.Dessert :
            this.dessert = this.dessert.filter(x => x!= dish);
      }
   }

   inOrder(dish : Dish) : boolean {
      var count: number = 0;
      switch (dish.category) {
         case Categories.Soup :
            count = this.soup.filter(x => x==dish).length;
            break;
         case Categories.Main :
            count = this.main.filter(x => x==dish).length;
            break;
         case Categories.Garnish :
            count = this.garnish.filter(x => x==dish).length;
            break;
         case Categories.Salad :
            count = this.salad.filter(x => x==dish).length;
            break;
         case Categories.Dessert :
            count = this.dessert.filter(x => x==dish).length;
      }
      return count > 0 ? true : false;
   }


}