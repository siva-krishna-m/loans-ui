import { State } from './../models/state.model';
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './../actions/counter-actions';
import { initialState } from './../counter.state';
import { counterActionsModel } from './../models/counter-actions.model';

export const counterReducer = createReducer(initialState,
  on(increment, state => ({...state, counter: state.counter+1})),
  on(decrement, state => ({...state, counter: state.counter - 1})),
  on(reset, state => ({...state, counter: 0}))
  )
