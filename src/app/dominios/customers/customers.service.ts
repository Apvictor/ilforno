import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tables } from '../tables/tables';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private API = environment.urlApi;
  private endpoint = 'customers';

  customers: Customers[];
  customer: Customers;

  constructor(
    private http: HttpClient,
  ) { }

  selectAll(): Observable<Customers[]> {
    return this.http.get<Customers[]>(`${this.API}/${this.endpoint}`);
  }

  selectId(id): Observable<Customers> {
    return this.http.get<Customers>(`${this.API}/${this.endpoint}/${id}`);
  }

  insert(data: Customers): Observable<Customers> {
    return this.http.post<Customers>(`${this.API}/${this.endpoint}`, data);
  }
  
}
