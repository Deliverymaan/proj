import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NotificationType } from '../models/notification-type.enum';
import { NotificationModel } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationState {
  constructor() {}

  private _notification$ = new Subject<NotificationModel | any>();

  getNotifications$(): Observable<NotificationModel | any> {
    return this._notification$.asObservable();
  }

  showNotification$(message: string, status: string, type: NotificationType) {
    this._notification$.next(<NotificationModel>{
      message: message,
      status: status,
      type: type,
    });
  }

  notifySuccess(message: string, status: string) {
    return this.showNotification$(message, status, NotificationType.success);
  }

  notifyError(message: string, status: string) {
    return this.showNotification$(message, status, NotificationType.error);
  }
}
