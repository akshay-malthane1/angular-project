import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  Title1 = 'LOGIN';
  InputFields = [{
    inputName: 'Username',
    inputType: 'text',
    inputPlaceholder: 'username'
  },
  {
    inputName: 'Password',
    inputType: 'password',
    inputPlaceholder: 'password'
  }
  ];
  SubmitButton = 'Login';

  constructor(public service: AuthService, public router: Router) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl(''),
    });

  }

  onCreate(): void {
    this.router.navigate(['signup']);
  }

  sendLogin(userCreds): void {
    this.service.getLogin(userCreds.Username, userCreds.Password).subscribe(res => {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['details']);
    });
  }
}
