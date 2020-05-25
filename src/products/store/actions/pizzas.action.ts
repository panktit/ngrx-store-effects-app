import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Failed';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Successful';

// possible actions
export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;

    // for sending some error message
    constructor (public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;

    // pizza information
    constructor (public payload: Pizza[]) {}
}

// export all action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;