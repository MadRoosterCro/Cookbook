import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Testni recept',
      'Ovo je samo test',
      'https://podravkaiovariations.azureedge.net/b592273e-63bb-11eb-a9a0-0242ac120018/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'
    ),
    new Recipe(
      'Testni recept',
      'Ovo je samo test',
      'https://podravkaiovariations.azureedge.net/b592273e-63bb-11eb-a9a0-0242ac120018/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'
    ),
    new Recipe(
      'Testni recept',
      'Ovo je samo test',
      'https://podravkaiovariations.azureedge.net/b592273e-63bb-11eb-a9a0-0242ac120018/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
