
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a;lksdjflsdk a text', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
        new Recipe('Another Test Recipe', 'This is simply a text', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}