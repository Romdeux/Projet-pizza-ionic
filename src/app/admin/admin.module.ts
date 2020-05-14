import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdminPage } from './admin.page';
import { RouterModule } from '@angular/router';
import { DeleteModalModule } from '../components/delete-modal/delete-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      }
    ]),
    DeleteModalModule,
  ],
  declarations: [AdminPage]
})
export class AdminPageModule { }
