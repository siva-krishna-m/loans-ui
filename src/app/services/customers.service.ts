import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers$ = this.http.get(environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS)
constructor(private http: HttpClient) { }


}
