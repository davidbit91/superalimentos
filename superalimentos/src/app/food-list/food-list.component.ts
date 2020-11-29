import { Component, OnInit } from '@angular/core';
import foods from '../shared/data/foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {

listFoods: Object[] = foods;

  constructor() { }

  ngOnInit(): void {

  }

}
