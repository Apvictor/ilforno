import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/fluxo-menu/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/fluxo-menu/category-product/category-product.module').then(m => m.CategoryProductPageModule)
  },
  {
    path: 'info-table',
    loadChildren: () => import('./components/modals/info-table/info-table.module').then(m => m.InfoTablePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/fluxo-menu/account/account.module').then( m => m.AccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
