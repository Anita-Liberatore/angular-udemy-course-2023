import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[]

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
