import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/service/loader.service';
import { tap } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private _loadServ: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const postToken =
      '441766a9f177e3898cffe095b41d475b27413f715c5849e97921e9eaba76304f';
    const reqWithAuth = req.clone({
      setHeaders: {
        Authorization: `Bearer ${postToken}`,
      },
    });
    this._loadServ.startApi();
    return next.handle(reqWithAuth).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this._loadServ.stopApi();
        }
      })
    );
  }
}
