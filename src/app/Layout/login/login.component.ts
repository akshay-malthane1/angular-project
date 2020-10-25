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
  loginForm ;
  constructor(public service: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required]),
      password: new FormControl(''),
    });

  }
  performLogin(userName, password): void {
    this.service.getLogin(userName.value, password.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['details']);
    });
  }

  onCreate(): void{
    this.router.navigate(['signup']);
}
}
