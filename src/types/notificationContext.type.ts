import type { Dispatch, SetStateAction } from 'react';
import type { Notification } from './notification.type';

export type NotificationContext = {
  state: Notification[];
  setState: Dispatch<SetStateAction<Notification[]>>;
};
