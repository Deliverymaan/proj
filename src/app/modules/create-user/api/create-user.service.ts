import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  constructor(private _http: HttpClient) {}

  public createUser(data: any) {
    const userPath = '/public/v2/users';
    // const headers = new HttpHeaders({
    //   'Content-type': 'application/json',
    //   Accept: 'application/json',
    // });

    return this._http.post(`${environment.apiurl}${userPath}`, data, {
      observe: 'response',
    });
  }
}
