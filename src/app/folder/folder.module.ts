import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { PizzaCardComponent } from '../components/pizza-card/pizza-card.component';
import { PizzaCardModule } from '../components/pizza-card/pizza-card.module';
import { ShoppingCartModule } from '../components/shopping-cart/shopping-cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    PizzaCardModule,
    ShoppingCartModule,
  ],
  declarations: [FolderPage]
})
export class FolderPageModule { }
