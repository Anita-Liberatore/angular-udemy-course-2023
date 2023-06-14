import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'Recipe 1',
          'Recipe Description 1',
          'https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg'
        ),
        new Recipe(
          'Recipe 2',
          'Recipe Description 2',
          'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg'
        ),
      ];

      getRecipes() {
        return this.recipes.slice(); //shallow copy
      }
      
}