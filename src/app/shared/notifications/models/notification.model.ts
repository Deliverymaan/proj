import { NotificationType } from './notification-type.enum';
export interface NotificationModel {
  message: string;
  status: string;
  type: NotificationType;
}
