import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
 
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private subscription: Subscription;
  constructor(private slService :ShoppingListService) { }

  ngOnInit(): void {
    console.log('reza on init')
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChange.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  //onReciveingredientsInputAdded(ingredient: Ingredient) {
    //this.ingredients.push(ingredient);
  //}

  onReciveingredientsInputDeleted() {
    this.ingredients.pop();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
