import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    public ingredientsChange = new Subject<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 5) 
      ];

    getIngredients() {
        return this.ingredients.slice();
    }  

    addIngredient(ingredient: Ingredient) {
        console.log('a')
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /* for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        } */
        console.log('b')
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }
}