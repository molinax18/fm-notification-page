import type {
  Notification,
  TNotificationType,
} from '../types/notification.type';

const NOTIFICATION_MESSAGES: Record<TNotificationType, string> = {
  reaction: 'reacted to your recent post',
  comment: 'commented on your post',
  follow: 'followed you',
  group_join: 'has joined your group',
  group_leave: 'left the group',
  private_message: 'sent you a private message',
  picture_comment: 'commented on your picture',
};

const getNotificationUnreadAmount = (state: Notification[]) => {
  return state.reduce((acc, n) => (!n.read ? acc + 1 : acc), 0);
};

const getNotificationMessageByType = (type: TNotificationType) => {
  return NOTIFICATION_MESSAGES[type];
};

export { getNotificationUnreadAmount, getNotificationMessageByType };
