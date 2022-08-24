import { TablesService } from './../../../dominios/tables/tables.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tables } from 'src/app/dominios/tables/tables';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customers } from 'src/app/dominios/customers/customers';
import { CustomersService } from 'src/app/dominios/customers/customers.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.page.html',
  styleUrls: ['./info-table.page.scss'],
})
export class InfoTablePage implements OnInit {

  public mesas: Tables[];
  public mesa: Tables;
  public customer: Customers;

  public numberPeople: number = 0;
  public sufficientChairs: boolean = false;

  public createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private tablesService: TablesService,
    private customersService: CustomersService,
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      customer: new FormControl('', Validators.compose([Validators.required])),
      tableId: new FormControl('', Validators.compose([Validators.required])),
      amountOfPeople: new FormControl('', Validators.compose([Validators.required])),
      moreChairs: new FormControl(null),
    });

    this.tables();
  }

  get controlForm() { return this.createForm.controls; }

  public tables() {
    this.tablesService.selectAll().subscribe((res: any) => {
      this.mesas = res;
    });
  }

  public numberOfTable(event) {
    this.tablesService.selectId(event.detail.value).subscribe((res: any) => {
      this.mesa = res;

      if (this.numberPeople != 0) {
        this.sufficientChairs = this.numberPeople > this.mesa.numberOfChairs ? true : false;
      }
    });
  }

  public numberOfPeople(event) {
    this.numberPeople = event.detail.value;

    if (this.mesa != undefined) {
      this.sufficientChairs = this.numberPeople > this.mesa.numberOfChairs ? true : false;
    }
  }

  public createCustomer() {
    this.createForm.value['moreChairs'] = this.createForm.value['moreChairs'] == null ? 0 : this.createForm.value['moreChairs'];
    this.customer = this.createForm.value;

    this.customersService.insert(this.customer).subscribe((res) => {
      this.saveLocalStorage(res);
      this.modalController.dismiss();
    });
  }

  private saveLocalStorage(customer: Customers) {
    window.localStorage.setItem('customer', JSON.stringify(customer));
  }

}
