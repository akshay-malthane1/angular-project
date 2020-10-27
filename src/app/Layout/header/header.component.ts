import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DarkService } from 'src/app/common/dark.service';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hide = false;
  darkTheme = new FormControl(false);
  constructor(
    private darkService: DarkService, private router: Router, private dataService: DataService
  ) { }
  ngOnInit(): void {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.darkService.toggleDark();
      } else {
        this.darkService.toggleLight();
      }

      this.dataService.observable.subscribe(res => console.log('response is ' + res));

    });
  }
  loggedin(): any {
    const loggedIn = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false;
    if (loggedIn === 'true') {
      return true;
    }
    return false;
  }

  onLogout(): any {
    this.router.navigate(['login']);
    return localStorage.removeItem('isLoggedIn');
  }

  changeOfRoute(res): any {
    console.log('Response is ' + res);
    // debugger;
    // if (!checkButton.checked) {
    //   checkButton.checked = true;
    // } else {
    //   checkButton.checked = false;
    // }
  }

}
