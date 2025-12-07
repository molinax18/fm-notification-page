import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { type NotificationContext } from '../types/notificationContext.type';
import { notificationReducer } from '../reducer/notification.reducer';
import { NOTIFICATIONS } from '../constants/notifications.constant';

const NotificationContext = createContext<NotificationContext | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notificationReducer, NOTIFICATIONS);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () =>
  useContext(NotificationContext) as NotificationContext;
