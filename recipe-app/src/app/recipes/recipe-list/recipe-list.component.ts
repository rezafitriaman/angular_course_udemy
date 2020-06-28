import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Squid', 'Crispy Fried Squid', 'https://img.delicious.com.au/RmCO55OJ/w1200/del/2017/03/fried-squid-with-garlic-and-parsley-43025-2.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}