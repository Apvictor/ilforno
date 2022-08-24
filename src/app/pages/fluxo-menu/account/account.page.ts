import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/dominios/accounts/accounts.service';
import { Products } from 'src/app/dominios/products/products';
import { Accounts } from 'src/app/dominios/accounts/accounts';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public totalLocalStorage;

  public accounts = new Accounts();


  constructor(
    private navController: NavController,
    public accountsService: AccountsService,
  ) { }

  ngOnInit() {
    this.accounts = JSON.parse(localStorage.getItem('accounts'));

    if (this.accounts) {
      this.accountsService.cartItemCount.next(this.accounts.products.length);
      this.accountsService.cartItemTotal.next(this.accounts.total);
    }
  }

  public buttonMore(produto: Products) {
    for (let p of this.accounts.products) {
      if (p.id === produto.id) {
        produto.amount += 1;
      }
    }

    this.saveStorage();
  }

  public buttonLess(produto: Products) {
    for (let [index, p] of this.accounts.products.entries()) {
      if (p.id === produto.id) {
        produto.amount -= 1;

        if (produto.amount < 1) {
          this.accounts.products.splice(index, 1)
        }
      }
    }

    this.saveStorage();
  }

  public addOrder() {
    this.accountsService.insert(this.accounts).subscribe((res) => {
      console.log(res);
      localStorage.removeItem('accounts');
      localStorage.removeItem('cartCount');
      this.accountsService.cartItemTotal.next(0);
      this.navController.navigateRoot('menu');
    });
  }

  private saveStorage() {
    this.accounts.total = this.accounts.products.reduce(this.getTotal, 0);
    this.accountsService.cartItemTotal.next(this.accounts.total);

    this.accountsService.cartItemCount.next(this.accounts.products.length);
    localStorage.setItem("accounts", JSON.stringify(this.accounts));
    localStorage.setItem("cartCount", JSON.stringify(this.accountsService.cartItemCount.value));
  }

  private getTotal(total, item) {
    return total + (item.price * item.amount);
  }

  public goToScreen(screen?: string) {
    if (screen) {
      this.navController.navigateForward(screen);
    } else {
      this.navController.back();
    }
  }
}
