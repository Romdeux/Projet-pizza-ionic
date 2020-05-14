import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';
import { DeleteModalComponent } from './delete-modal.component';

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
    providers: [],
})
export class DeleteModalModule { }
