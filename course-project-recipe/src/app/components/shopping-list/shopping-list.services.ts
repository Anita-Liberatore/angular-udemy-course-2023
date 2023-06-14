import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }
}