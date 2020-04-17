import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        // FolderPageRoutingModule
    ],
    declarations: [ShoppingCartComponent],
    exports: [ShoppingCartComponent],
    entryComponents: [ShoppingCartComponent],
    providers: [],
})
export class ShoppingCartModule { }
