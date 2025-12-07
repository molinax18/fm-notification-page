import type {
  Notification,
  TNotificationType,
} from '../types/notification.type';
import { NOTIFICATION_MESSAGES } from '../constants/notifications.constant';

const getNotificationUnreadAmount = (state: Notification[]) => {
  return state.reduce((acc, n) => (!n.read ? acc + 1 : acc), 0);
};

const getNotificationMessageByType = (type: TNotificationType) => {
  return NOTIFICATION_MESSAGES[type];
};

export { getNotificationUnreadAmount, getNotificationMessageByType };
