import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifFormPageRoutingModule } from './modif-form-routing.module';

import { ModifFormPage } from './modif-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifFormPageRoutingModule
  ],
  declarations: [ModifFormPage]
})
export class ModifFormPageModule {}
