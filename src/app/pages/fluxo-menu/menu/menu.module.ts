import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuPageRoutingModule } from './menu-routing.module';
import { ShareModule } from 'src/app/components/share.module';
import { MenuPage } from './menu.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MenuPageRoutingModule,
    ShareModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
