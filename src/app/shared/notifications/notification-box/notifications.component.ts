import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../models/notification.model';
import { NotificationState } from '../state/notification.state';
import { NotificationType } from '../models/notification-type.enum';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationModel[] = [];

  constructor(private _state: NotificationState) {}

  ngOnInit(): void {
    this._state.getNotifications$().subscribe((notify: NotificationModel) => {
      this.notifications = [];
      if (!notify) {
        this.notifications = [];
        return;
      }
      this.notifications.push(notify);
      // setTimeout(() => {
      //   this.notifications = this.notifications.filter((not) => not !== notify);
      // }, 4000);
    });
  }
}
