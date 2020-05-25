import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

// register reducer

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}