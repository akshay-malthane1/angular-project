import { Observable, of } from 'rxjs';

export class AuthServiceMock {
    getLogin(): Observable<null> {
        return of (null);

    }
}
