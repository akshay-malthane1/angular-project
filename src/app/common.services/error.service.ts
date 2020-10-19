import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

class Post {
  constructor(
    public id: string,
    public title: string,
    public body: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
