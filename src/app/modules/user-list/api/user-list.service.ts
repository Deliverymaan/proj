import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private _http: HttpClient) {}

  public getUserList() {
    const userPath = '/public/v2/users?page=4';
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Pagination-Limit': '12',
    });
    return this._http.get(`${environment.apiurl}${userPath}`, {
      headers: headers,
    });
  }
}
