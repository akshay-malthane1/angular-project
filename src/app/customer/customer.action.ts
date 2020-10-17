import { createAction, props } from '@ngrx/store';
import Customer from './customer.model';

export const GetCustomerAction = createAction(
    '[Customer] - Get Customer'
);

export const CreateCustomerAction = createAction(
    '[Customer] - Create Customer',
    props<Customer>()
);