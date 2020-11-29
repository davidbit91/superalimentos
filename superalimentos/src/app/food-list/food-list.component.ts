import { Component, OnInit } from '@angular/core';
import foods from '../shared/data/foods';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {

maxCalories: number;
listFoods: Object[] = foods;
menu: String[];
formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.maxCalories = 0;
  this.menu = [];
  this.formGroup = this.fb.group({
    name: ['', Validators.required],
    calories:['', Validators.required],
    img: ['', Validators.required]
  })
  }

  agregarMenu(food: string, calories: number){
    this.menu.push(food);
    this.maxCalories += calories;
  }
  agregarComida(){
    this.listFoods.push({
      name: this.formGroup.get('name').value,
      calories: this.formGroup.get('calories').value,
      img: this.formGroup.get('img').value
    });
    this.formGroup.reset();
  }
}
