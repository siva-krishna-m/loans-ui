import { Observable } from 'rxjs';
import { CustomersService } from './../../services/customers.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCustomersComponent implements OnInit {
  customersList$: Observable<any> = this.customerService.customers$;

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
  }


}
