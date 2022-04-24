import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

constructor(private http: HttpClient) { }
getCustomers() {
  const url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS
  return this.http.get(url)
}

viewCustomers() {

}

}
