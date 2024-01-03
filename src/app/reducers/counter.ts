import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {count} from "rxjs";
import {state} from "@angular/animations";


export const COUNTER_KEY = 'counter';
export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const reset = createAction('[COUNTER] reset');
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{updatedAt:number}>()
);


export interface CounterState {
  count: number;
  updatedAt?: number
}

export const initialState: CounterState = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(reset, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
);

export const futureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);

export const countSelector = createSelector(
  futureSelector,
  state => state.count
)

export const updatedAtSelector = createSelector(
  futureSelector,
  state => state.updatedAt
)
