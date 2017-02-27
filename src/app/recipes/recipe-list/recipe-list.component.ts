import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('John', 'Bel', 'http://orig00.deviantart.net/edfb/f/2013/025/0/7/pocket_john_watson_by_hotaruxsasuke1233-d5sqk8i.png'),
    new Recipe('Anna', 'Okay', 'http://orig09.deviantart.net/d55b/f/2012/201/8/c/mine_turtle_id_by_hotaruxsasuke1233-d57ypfr.png')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
