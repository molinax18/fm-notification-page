import type { Notification } from '../types/notification.type';

export type NotificationActionType =
  | { type: 'MARK_ALL' }
  | { type: 'MARK_SINGLE'; payload: number };

export const notificationReducer = (
  state: Notification[],
  action: NotificationActionType
) => {
  switch (action.type) {
    case 'MARK_ALL':
      const notificationsMarked = state.map((n) => ({ ...n, read: true }));
      return notificationsMarked;

    case 'MARK_SINGLE':
      const newNotifications = state.map((n) => ({
        ...n,
        read: action.payload === n.id ? true : n.read,
      }));

      return newNotifications;

    default:
      return state;
  }
};
