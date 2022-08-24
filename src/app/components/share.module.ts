import { HeaderCategoryComponent } from './header-category/header-category.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryProductsCardComponent } from './category-products-card/category-products-card.component';
import { MoneyBrModule } from './pipes/money-br/money-br.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyBrModule
  ],
  declarations: [
    CategoriesComponent,
    HeaderCategoryComponent,
    CategoryProductsCardComponent,
  ],
  exports: [
    CategoriesComponent,
    HeaderCategoryComponent,
    CategoryProductsCardComponent,
    MoneyBrModule
  ]
})
export class ShareModule { }
