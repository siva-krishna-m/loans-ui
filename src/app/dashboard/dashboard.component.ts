import { Counter } from './../state/models/counter';
import { State } from './../state/models/state.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/actions/counter-actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  counter: number = 0;

  constructor(public store: Store<State>) {
    this.store
      .select('counter')
      .subscribe((d: any) => (this.counter = d.counter));
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
