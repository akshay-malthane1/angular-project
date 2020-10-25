import { Injectable, OnInit } from '@angular/core';
import { constructor } from 'events';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private behaviourSubject = new BehaviorSubject<string>('initial');
  observable = this.behaviourSubject.asObservable();

  emitNewValue(value): void {
    this.behaviourSubject.next(value);
  }
  constructor() {
    // this.behaviourSubject.subscribe(res => console.log("Response is " + res));
  }
}

