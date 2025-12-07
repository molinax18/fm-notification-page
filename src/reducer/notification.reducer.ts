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
      return state.map((n) => ({ ...n, read: true }));

    case 'MARK_SINGLE':
      return state.map((n) => ({
        ...n,
        read: action.payload === n.id ? true : n.read,
      }));

    default:
      return state;
  }
};
