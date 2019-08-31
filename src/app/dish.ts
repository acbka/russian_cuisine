import { Categories } from "./categories";

export class Dish {
    id: number;
    category: Categories;
    name: string;
    ingrideinets: string[];
    dairyFree: boolean;
    calories: number;
    pict: string
}