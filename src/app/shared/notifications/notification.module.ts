import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notification-box/notifications.component';
import { NotificationState } from './state/notification.state';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [CommonModule],
  exports: [NotificationsComponent],
  providers: [NotificationState],
})
export class NotificationModule {}
