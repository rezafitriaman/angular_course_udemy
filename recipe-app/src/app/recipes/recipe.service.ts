import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Squid',
      'Crispy Fried Squid',
      'https://img.delicious.com.au/RmCO55OJ/w1200/del/2017/03/fried-squid-with-garlic-and-parsley-43025-2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 1)]
    ),
    new Recipe(
      'KFC',
      'Crispy Fried chicken',
      'https://d3f6dtwp468eub.cloudfront.net/app/uploads/2015/11/KFC.jpg',
      [new Ingredient('chicken', 20), new Ingredient('Buns', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
