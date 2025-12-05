import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Notification } from '../types/notification.type';
import { type NotificationContext } from '../types/notificationContext.type';

const NotificationContext = createContext<NotificationContext | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<Notification[]>([]);

  return (
    <NotificationContext.Provider value={{ state, setState }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () =>
  useContext(NotificationContext) as NotificationContext;
