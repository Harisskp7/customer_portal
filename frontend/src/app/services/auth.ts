import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/customer/login';

  constructor(private http: HttpClient) {}

  login(customer: Customer): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }
}
