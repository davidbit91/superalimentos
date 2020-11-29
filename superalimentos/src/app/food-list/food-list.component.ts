import { Component, OnInit } from '@angular/core';
import foods from '../shared/data/foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {

maxCalories: number;
listFoods: Object[] = foods;
menu: String[];

  constructor() { }

  ngOnInit(): void {
  this.maxCalories = 0;
  this.menu = [];
  }

  agregarMenu(food: string, calories: number){
    this.menu.push(food);
    this.maxCalories += calories;
  }
  agregarComida(){

  }
}
