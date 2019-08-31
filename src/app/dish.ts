import { Categories } from "./categories";

// here my comments

export class Dish {
    id: number;
    category: Categories;
    name: string;
    ingrideinets: string[];
    dairyFree: boolean;
    calories: number;
    pict: string
}