import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
