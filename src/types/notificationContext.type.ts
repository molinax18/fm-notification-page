import type { ActionDispatch } from 'react';
import type { Notification } from './notification.type';
import type { NotificationActionType } from '../reducer/notification.reducer';

export type NotificationContext = {
  state: Notification[];
  dispatch: ActionDispatch<[action: NotificationActionType]>;
};
