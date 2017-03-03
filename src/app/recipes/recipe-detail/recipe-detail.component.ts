import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    // this.selectedRecipe = new Recipe('jDummy', 'jDumy', 'http://4.bp.blogspot.com/-RBuRPj2WQJs/TbgVeyN2TQI/AAAAAAAAAoY/eUD7kVx7Kjk/s1600/tracejado.jpg');
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
