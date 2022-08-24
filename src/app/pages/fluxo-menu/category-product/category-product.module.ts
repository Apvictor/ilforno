import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductPageRoutingModule } from './category-product-routing.module';

import { CategoryProductPage } from './category-product.page';
import { ShareModule } from 'src/app/components/share.module';
import { MoneyBrModule } from 'src/app/components/pipes/money-br/money-br.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductPageRoutingModule,
    ShareModule,
    MoneyBrModule
  ],
  declarations: [CategoryProductPage]
})
export class CategoryProductPageModule {}
