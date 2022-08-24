import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = environment.urlApi;
  private endpoint = 'products';

  products: Products[] = [];
  product: Products;

  constructor(
    private http: HttpClient,
  ) { }

  selectAll(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.API}/${this.endpoint}`);
  }

  selectId(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.API}/${this.endpoint}/${id}`);
  }

  selectByCategoryId(categoryId: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.API}/${this.endpoint}?categoryId=${categoryId}`);
  }

  update(data: Products): Observable<Products> {
    return this.http.put<Products>(`${this.API}/${this.endpoint}/${data.id}`, data);
  }

}
