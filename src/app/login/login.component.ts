import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm ;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({

      username: new FormControl('', [ Validators.required]),

      password: new FormControl(''),
    });

  }
  performLogin(userName, password) {
    this.service.getLogin(userName.value, password.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['details']);
    });
  }

  onCreate(){
    this.router.navigate(['signup']);
}
}
