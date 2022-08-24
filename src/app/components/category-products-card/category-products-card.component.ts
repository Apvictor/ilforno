import { NavController } from '@ionic/angular';
import { Accounts } from '../../dominios/accounts/accounts';
import { ProductsService } from '../../dominios/products/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/dominios/products/products';
import { AccountsService } from 'src/app/dominios/accounts/accounts.service';
import { CustomersService } from 'src/app/dominios/customers/customers.service';

@Component({
  selector: 'app-category-products-card',
  templateUrl: './category-products-card.component.html',
  styleUrls: ['./category-products-card.component.scss'],
})
export class CategoryProductsCardComponent implements OnInit {
  @Input() categoryId: number;

  public terminouDeCarregar: boolean = false;

  public produtos: Products[];
  public produtosCopy: Products[];
  public accounts = new Accounts();

  public customerLocalStorage;
  public accountsLocalStorage;
  public cartCountLocalStorage;

  constructor(
    public accountsService: AccountsService,
    private productsService: ProductsService,
    private customersService: CustomersService,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.produtosCopy = [];
    this.accounts.status = 'EM ANDAMENTO';

    this.customerLocalStorage = JSON.parse(window.localStorage.getItem('customer'));
    this.accountsLocalStorage = JSON.parse(localStorage.getItem("accounts"));
    this.cartCountLocalStorage = JSON.parse(localStorage.getItem("cartCount"));

    this.products(this.categoryId);
    this.customerId(this.customerLocalStorage);
  }

  public products(categoryId: number) {
    this.productsService.selectByCategoryId(categoryId).subscribe((res: any) => {
      this.produtos = res;

      if (this.accountsLocalStorage) {
        this.accountsService.cartItemCount.next(this.accountsLocalStorage.products.length);
        this.accounts.products = this.accountsLocalStorage.products;

        this.produtosCopy = this.accountsLocalStorage.products;
        this.produtosCopy.map((pc) => {
          this.produtos = this.produtos.map(p => {
            if (p.id === pc.id) { p = pc; }

            return p;
          });
        });
      }

      this.terminouDeCarregar = true;
    });
  }

  public customerId(customer) {
    this.customersService.selectId(customer.id).subscribe((res) => {
      this.accounts.customer = res;
    });
  }

  public buttonMore(produto: Products) {
    let less = document.getElementById('less-' + produto.id);
    less.classList.remove('disabled');

    let added = false

    for (let p of this.accounts.products) {
      if (p.id === produto.id) {
        produto.amount += 1;
        added = true;
      }
    }

    if (!added) {
      produto.amount = 1
      this.accounts.products.push(produto)
    }

    this.saveStorage();
  }

  public buttonLess(produto: Products) {
    let less = document.getElementById('less-' + produto.id);

    for (let [index, p] of this.accounts.products.entries()) {
      if (p.id === produto.id) {
        produto.amount -= 1;

        if (produto.amount < 1) {
          this.accounts.products.splice(index, 1)
          less.classList.add('disabled');
        }
      }
    }

    this.saveStorage();
  }

  public addCart() {
    this.navController.navigateForward('account');
  }

  private saveStorage() {
    this.accounts.total = this.accounts.products.reduce(this.getTotal, 0);

    this.accountsService.cartItemCount.next(this.accounts.products.length);
    localStorage.setItem("accounts", JSON.stringify(this.accounts));
    localStorage.setItem("cartCount", JSON.stringify(this.accountsService.cartItemCount.value));
  }

  private getTotal(total, item) {
    return total + (item.price * item.amount);
  }

}
