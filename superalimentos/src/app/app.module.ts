import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
