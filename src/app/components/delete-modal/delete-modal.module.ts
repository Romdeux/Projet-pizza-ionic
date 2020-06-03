import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';
import { DeleteModalComponent } from './delete-modal.component';
import { IngredientService } from 'src/app/services/ingredients/ingredient.service';
import { PizzaService } from 'src/app/services/pizzas/pizza.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        // FolderPageRoutingModule
    ],
    declarations: [DeleteModalComponent],
    exports: [DeleteModalComponent],
    entryComponents: [DeleteModalComponent],
    providers: [
        IngredientService,
        PizzaService,
    ],
})
export class DeleteModalModule { }
