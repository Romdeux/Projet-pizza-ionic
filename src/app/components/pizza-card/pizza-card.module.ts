import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaModalModule } from '../pizza-modal/pizza-modal.module';
import { PizzaCardComponent } from './pizza-card.component';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';

import { PizzaModalComponent } from '../pizza-modal/pizza-modal.component';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: PizzaCardComponent
            }
        ]),
        PizzaModalModule,
        // FolderPageRoutingModule
    ],
    declarations: [PizzaCardComponent],
    exports: [PizzaCardComponent],
    providers: [CartService]
})
export class PizzaCardModule { }
