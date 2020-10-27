import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/common/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Title1 = 'SIGNUP';
  InputFields = [{
    inputName: 'Username',
    inputType: 'text',
    inputPlaceholder: 'username'
  },
  {
    inputName: 'Password',
    inputType: 'password',
    inputPlaceholder: 'password'
  },
  {
    inputName: 'Email',
    inputType: 'email',
    inputPlaceholder: 'email'
  }
  ];
  SubmitButton = 'Signup';

  constructor(private crud: CrudService, private router: Router) {
  }
  navigateToLogin(): void {
    this.router.navigate(['login']);
  }
  ngOnInit(): void { }

  sendLogin(userCreds): void {
    this.crud.createUser(userCreds).subscribe(res => {
      alert('your account has been created,please login to continue');
      this.navigateToLogin();
    }
    );
  }
}
