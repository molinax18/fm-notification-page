import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationProvider } from './contexts/NotificationContext.tsx';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StrictMode>
);
