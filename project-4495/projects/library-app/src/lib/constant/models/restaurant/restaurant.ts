import {DefaultModel} from "../default-model";
import {Meal} from "../meal/meal";

export class Restaurant extends DefaultModel {
  id: string = '';
  name: string = '';
  address: string = '';
  phone_no: string = '';
  lat: string = '';
  long: string = '';

  meal_ids: string[] = [];
  meals: Meal[] = [];

  constructor(data: any) {
    super(data);
    super.copyInto(data);
  }

}
