import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customersList: any;

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerService.getCustomers().subscribe((res: any) => {
      this.customersList = res.results;
    })
  }

}
