import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API = environment.urlApi;
  private endpoint = 'categories';

  categories: Categories[];
  category: Categories;

  constructor(
    private http: HttpClient,
  ) { }

  selectAll(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.API}/${this.endpoint}`);
  }

  selectId(id): Observable<Categories> {
    return this.http.get<Categories>(`${this.API}/${this.endpoint}/${id}`);
  }
}
