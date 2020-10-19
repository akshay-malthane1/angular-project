import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { CrudService } from '../common.services/crud.service';
import Customer from '../customer/customer.model';
import * as CustomerActions from '../customer/customer.action';
import CustomerState from '../customer/customer.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ray: any;
  customer: any[];
  user: any;
  isEdit = false;
  CustomerSubscription: Subscription;

  userObj = {
    firstname: '',
    email: '',
    password: '',
  };

  constructor(private myService: CrudService, private store: Store<{ customers: CustomerState }>) {
    this.ray = store.pipe(select('customers'));
  }
  ngOnInit() {
    this.getLatestUser();
    this.CustomerSubscription = this.ray.pipe(map((x: any) => { this.customer = x.customer; console.log(x); })).subscribe();
  }

  addUser(formObj) {
    const customer = new Customer();
    customer.firstname = formObj.firstname;
    customer.email = formObj.email;
    customer.password = formObj.password;
    this.store.dispatch(CustomerActions.CreateCustomerAction(customer));
    this.myService.createUser(customer).subscribe((response) => {
      console.log('user added');
      this.getLatestUser();
    });
  }
  getLatestUser() {
    this.myService.getAllUser().subscribe((response) => {
      this.ray = response
      console.log(this.ray);
    });
  }
  editUser(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user) {
    this.myService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    });
  }
  updateUser() {
    this.isEdit = !this.isEdit;
    this.myService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    });
  }
}
