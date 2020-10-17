import Customer from './customer.model';

export default class CustomerState {
    customer: Array<Customer>
}

export const initializeState = (): CustomerState => {
    return { customer: Array<Customer>()}
}