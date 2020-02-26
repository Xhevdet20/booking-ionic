import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    
    console.log('onInit');
    console.log(this.recipes);
    
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    
  }

  ionViewWillLeave() {
    console.log('IonViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('IonViewDidLeave');
    
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    
  }

}
