import { isLoweredSymbol } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
      return true;
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    // if (isLoggedIn) {
    //   return true;
    // } else {
    //   this.router.navigate(['unauthorized'])
    //   return false;
    // }
  }
  constructor(private router: Router) { }
}
