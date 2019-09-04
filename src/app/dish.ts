import { Categories } from "./categories";


export class Dish {
    id: number;
    category: Categories;
    name: string;
    ingredients: string[];
    dairyFree: boolean;
    calories: number;
    pict: string;
    selected: boolean;
}