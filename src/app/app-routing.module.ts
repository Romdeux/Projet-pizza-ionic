import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'folder/pizza/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'add-form/:id',
    loadChildren: () => import('./components/add-form/add-form.module').then(m => m.AddFormPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./components/cart-modal/cart-modal.module').then(m => m.CartModalPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
