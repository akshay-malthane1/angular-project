import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DarkService } from 'src/app/common.services/dark.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hide = false;
  darkTheme = new FormControl(false);
  constructor(
    private darkService: DarkService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.darkService.toggleDark();
      } else {
        this.darkService.toggleLight();
      }
    });
  }
  loggedin() {
    const loggedIn = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false;
    // console.log("Am I logged in " + loggedIn);
    if (loggedIn === 'true') {
      return true;
    }
    return false;
  }

  onLogout() {
    this.router.navigate(['login']);
    return localStorage.removeItem('isLoggedIn');
  }

  changeOfRoute(checkButton: any) {
    // debugger;
    if (!checkButton.checked) {
      checkButton.checked = true;
    } else {
      checkButton.checked = false;
    }
  }
}
