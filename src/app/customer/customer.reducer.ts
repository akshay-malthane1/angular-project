import CustomerState, { initializeState } from './customer.state';
import * as CustomerActions from './customer.action';
import { Action, createReducer, on } from '@ngrx/store';
import Customer from './customer.model';
export const initialState = initializeState();
const reducer = createReducer(
    initialState,
    on(CustomerActions.GetCustomerAction, state => state),
    on(CustomerActions.CreateCustomerAction, (state: CustomerState, customer: Customer) => {
        console.log('State is ');
        console.log(customer);
        return { ...state, customer: [...state.customer, customer] };
    })
);

export function CustomerReducer(state: CustomerState | undefined, action: Action): any {
    return reducer(state, action);
}
