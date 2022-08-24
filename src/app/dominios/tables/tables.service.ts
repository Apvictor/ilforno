import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tables } from './tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private API = environment.urlApi;
  private endpoint = 'tables';

  tables: Tables[];
  table: Tables;

  constructor(
    private http: HttpClient,
  ) { }

  selectAll(): Observable<Tables[]> {
    return this.http.get<Tables[]>(`${this.API}/${this.endpoint}`);
  }

  selectId(id): Observable<Tables> {
    return this.http.get<Tables>(`${this.API}/${this.endpoint}/${id}`);
  }

  insert(data: Tables): Observable<Tables> {
    return this.http.post<Tables>(`${this.API}/${this.endpoint}`, data);
  }
  
}
