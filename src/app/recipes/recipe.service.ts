import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('John', 'Bel', 'http://orig00.deviantart.net/edfb/f/2013/025/0/7/pocket_john_watson_by_hotaruxsasuke1233-d5sqk8i.png', [
      new Ingredient('Batatas', 2),
      new Ingredient('Coca', 1)
    ]),
    new Recipe('Anna', 'Okay', 'http://orig09.deviantart.net/d55b/f/2012/201/8/c/mine_turtle_id_by_hotaruxsasuke1233-d57ypfr.png', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
