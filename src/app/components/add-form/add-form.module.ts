import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFormPageRoutingModule } from './add-form-routing.module';

import { AddFormPage } from './add-form.page';
import { PizzaService } from 'src/app/services/pizzas/pizza.service';
import { IngredientService } from 'src/app/services/ingredients/ingredient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFormPageRoutingModule
  ],
  declarations: [AddFormPage],
  providers: [
    PizzaService,
    IngredientService
  ]
})
export class AddFormPageModule { }
