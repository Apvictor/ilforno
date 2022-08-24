import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accounts } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private API = environment.urlApi;
  private endpoint = 'accounts';

  accounts: Accounts[];
  account: Accounts;

  cartItemCount = new BehaviorSubject(0);
  cartItemTotal = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
  ) { }

  selectAll(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(`${this.API}/${this.endpoint}`);
  }

  selectId(id): Observable<Accounts> {
    return this.http.get<Accounts>(`${this.API}/${this.endpoint}/${id}`);
  }

  insert(data: Accounts): Observable<Accounts> {
    return this.http.post<Accounts>(`${this.API}/${this.endpoint}`, data);
  }

}
