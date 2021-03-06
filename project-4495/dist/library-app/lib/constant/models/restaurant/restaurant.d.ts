import { DefaultModel } from "../default-model";
import { Meal } from "../meal/meal";
export declare class Restaurant extends DefaultModel {
    id: string;
    name: string;
    address: string;
    phone_no: string;
    img1: string;
    img2: string;
    del_time: string;
    del_fee: string;
    rating: number;
    lat: number;
    lng: number;
    meal_ids: string[];
    meals: Meal[];
    constructor(data: any);
}
