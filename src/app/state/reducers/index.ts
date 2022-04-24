import { State } from './../models/state.model';
import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from './counter.reducer';
import { Counter } from '../models/counter';

interface AppState {
  counter: Counter
}

export const reducers: ActionReducerMap<AppState
> = {
  counter: counterReducer
}
