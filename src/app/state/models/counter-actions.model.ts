export enum CounterActions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

export interface counterActionsModel {
  type:
    | CounterActions.INCREMENT
    | CounterActions.DECREMENT
    | CounterActions.RESET;
}
