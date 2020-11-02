import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pretzel', 'A super-tasty Pretzel', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Pretzels.jpg',
            [
                new Ingredient('flour', 5),
                new Ingredient('salt', 2)
            ]),
        new Recipe('Burger', 'Moo', 'https://upload.wikimedia.org/wikipedia/commons/0/07/Lounge_Burger_with_Bacon.jpg', [
            new Ingredient('meat', 5),
            new Ingredient('bun', 2)
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}