import { Dish } from './dish';

export class Order {
    id: number;
    date: Date;
    firstSoup: Dish;
    secondSoup: Dish;
    firstMain: Dish;
    secondMain: Dish;
    firstGarnish: Dish;
    secondGarnish: Dish;
    salad: Dish;
    dessert: Dish;

    customerName: string;
    customerPhone: string;
    customerAddress: string;
    deliveryDateTime: Date;

    constructor() {
    }
}