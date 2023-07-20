import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.services";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput', {static: true}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: true}) nameAmountRef!: ElementRef;

  constructor(private slService: ShoppingListService) {

  }
  onAddItem() {
    const name = (this.nameInputRef.nativeElement.value);
    const amount = (this.nameAmountRef.nativeElement.value);
    const newIngredient = new Ingredient(name, amount)
    this.slService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
  }

}
