import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as pizzaActions from '../actions/pizzas.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PizzasService } from '../../services';

@Injectable()
export class PizzasEffects {
    constructor(private actions$: Actions, private pizzaService: PizzasService) {}

    @Effect()
    loadPizzas$  = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
        switchMap(() => {
            return this.pizzaService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
            )
        })
    );
}