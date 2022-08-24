import { AccountsService } from './../../dominios/accounts/accounts.service';
import { Categories } from 'src/app/dominios/categories/categories';
import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/dominios/categories/categories.service';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss'],
})
export class HeaderCategoryComponent implements OnInit {
  @Input() categoryId: number;

  public terminouDeCarregar: boolean = false;

  public categoria: Categories;

  public accountsLocalStorage;
  public cartItemCountLocalStorage;

  constructor(
    private navController: NavController,
    private categoriesService: CategoriesService,
    public accountsService: AccountsService,
  ) { }

  ngOnInit() {
    this.accountsLocalStorage = localStorage.getItem('accounts');

    if (this.accountsLocalStorage) {
      this.accountsService.cartItemCount.next(this.accountsLocalStorage.total);
    } else {
      this.accountsService.cartItemCount.next(0);
      localStorage.setItem('cartCount', '0');
    }

    this.category(this.categoryId);
  }

  public category(id: number) {
    this.categoriesService.selectId(id).subscribe((res: any) => {
      this.categoria = res;
      this.terminouDeCarregar = true;
    });
  }

  public goToScreen(screen?: string) {
    if (screen) {
      this.navController.navigateForward(screen);
    } else {
      this.navController.back();
    }
  }

}
