import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifFormPage } from './modif-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModifFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifFormPageRoutingModule {}
