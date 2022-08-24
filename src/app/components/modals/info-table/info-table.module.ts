import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTablePageRoutingModule } from './info-table-routing.module';

import { InfoTablePage } from './info-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InfoTablePageRoutingModule
  ],
  declarations: [InfoTablePage]
})
export class InfoTablePageModule {}
