import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  performLogin(userName, password) {
    this.service.getLogin(userName.value, password.value).subscribe(res => {
      console.log(res);
      localStorage.setItem("isLoggedIn", 'true');
      this.router.navigate(['details']);
    });
  }
}