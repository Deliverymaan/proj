import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _count = 0;
  private loader$ = new BehaviorSubject<string>('');

  constructor() {}

  getLoader(): Observable<string> {
    return this.loader$.asObservable();
  }

  startApi() {
    if (++this._count === 1) {
      this.loader$.next('start');
    }
  }
  stopApi() {
    if (this._count === 0 || --this._count === 0) {
      this.loader$.next('stop');
    }
  }
}
