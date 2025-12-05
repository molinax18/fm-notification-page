import { useNotificationContext } from '../../contexts/NotificationContext';

import NotificationCard from './NotificationCard';

export default function Notification() {
  const { state } = useNotificationContext();

  return (
    <section>
      <header>
        <div>
          <h3>Notications</h3>
          <span>3</span>
        </div>

        <button>Mark all as read</button>
      </header>

      <div>
        {state.map((nc) => (
          <NotificationCard data={nc} />
        ))}
      </div>
    </section>
  );
}
