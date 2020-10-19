
import { createAction, props } from '@ngrx/store';
import Customer from './customer/customer.model';

export const addCustomer = createAction(

    '[Customer] Add Customer',

    (customer: Customer) => ({ customer })

);
