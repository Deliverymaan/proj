import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private _http: HttpClient) {}

  public getUserList() {
    const userPath = '/public/v2/users';

    return this._http.get(`${environment.apiurl}${userPath}`);
  }
}