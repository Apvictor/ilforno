import { InfoTablePage } from 'src/app/components/modals/info-table/info-table.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage implements OnInit {

  public customerLocalStorage;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.customerLocalStorage = window.localStorage.getItem('customer');

    if (!this.customerLocalStorage) {
      setTimeout(() => {
        this.showModal();
      }, 1500);
    }
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: InfoTablePage,
      cssClass: 'modal-config',
      componentProps: {}
    });

    modal.onDidDismiss().then(() => { });

    return await modal.present();
  }

}
