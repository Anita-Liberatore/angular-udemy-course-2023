import {EventEmitter, Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.services";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Recipe 1',
          'Recipe Description 1',
          'https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg',
          [ new Ingredient('Meat', 1)]
        ),
        new Recipe(
          'Recipe 2',
          'Recipe Description 2',
          'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
          [ new Ingredient('French Fries', 20), new Ingredient('Meat', 1)]
        ),
      ];

      getRecipes() {
        return this.recipes.slice(); //shallow copy
      }

      constructor(private slService: ShoppingListService) {
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }

}
