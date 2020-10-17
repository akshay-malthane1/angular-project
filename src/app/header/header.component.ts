import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit() {
    // localStorage.removeItem("isLoggedIn");
  }
  loggedin() {
    const loggedIn = localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : false;
    // console.log("Am I logged in " + loggedIn);
    if (loggedIn === "true") {
      return true;
    }
    return false;
  }

  onLogout() {
    this.router.navigate(['login']);
    return localStorage.removeItem("isLoggedIn")
} }
