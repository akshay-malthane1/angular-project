import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  getLogin(uname, pwd): any {
    const postObject = {
      username: uname,
      password: pwd
    };
    return this.httpClient.post('http://localhost:3000/profile', postObject);
  }
}
