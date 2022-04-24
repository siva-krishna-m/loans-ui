 import { createAction } from "@ngrx/store";
import { CounterActions } from "../models/counter-actions.model";

export const increment = createAction(CounterActions.INCREMENT);
export const decrement = createAction(CounterActions.DECREMENT);
export const reset = createAction(CounterActions.RESET);
