import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';

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
    return this.http.post<Post[]>(environment.endpoint.POSTS, user);
  }

  getAllUser(): any {
    return this.http.get(environment.endpoint.POSTS)
      .pipe(
        retry(1),
        catchError(this.errorservice.handleError)
      );
  }

  deleteUser(user): any {
    return this.http.delete(environment.endpoint.POSTS + user.id);
  }

  updateUser(user): any {
    return this.http.put(environment.endpoint.POSTS + user.id, user);
  }
}
