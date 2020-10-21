import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from './error.service';

class Post {
  public username: string;
  public email: string;
  public password: string;
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private errorservice: ErrorService
  ) { }

  createUser(user): Observable<Post[]> {
    return this.http.post<Post[]>('http://localhost:3000/posts', user);
  }

  getAllUser() {
    return this.http.get('http://localhost:3000/posts')
      .pipe(
        retry(1),
        catchError(this.errorservice.handleError)
      );
  }

  deleteUser(user) {
    return this.http.delete('http://localhost:3000/posts/' + user.id);
  }

  updateUser(user) {
    return this.http.put('http://localhost:3000/posts/' + user.id, user);
  }
}
