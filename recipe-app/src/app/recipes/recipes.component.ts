import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  /* @Output() selectedRecipe: Recipe; */
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    /* this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log('a', recipe);
      this.selectedRecipe = recipe;
    }); */
  }

  /*   onReciveDetail(recipe: Recipe) {
    this.selectedRecipe = recipe;
  } */
}
