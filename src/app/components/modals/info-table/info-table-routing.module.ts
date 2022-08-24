import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTablePage } from './info-table.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTablePageRoutingModule {}
