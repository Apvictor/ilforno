import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Categories } from 'src/app/dominios/categories/categories';
import { CategoriesService } from 'src/app/dominios/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public terminouDeCarregar: boolean = false;

  public categorias: Categories[];

  constructor(
    private categoriesService: CategoriesService,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.categories();
  }

  public categories() {
    this.categoriesService.selectAll().subscribe((res: any) => {
      this.categorias = res;
      this.terminouDeCarregar = true;
    })
  }

  public goToScreen(screen?: string) {
    if (screen) {
      this.navController.navigateForward(screen);
    } else {
      this.navController.back();
    }
  }

}
