import { useNotificationContext } from '../../contexts/NotificationContext';
import { getNotificationUnreadAmount } from '../../utils/notification.util';

import NotificationCard from './NotificationCard';

export default function Notification() {
  const { state } = useNotificationContext();

  return (
    <section className="flex flex-col gap-y-6 bg-white h-full py-6 px-4 sm:h-auto sm:w-full sm:max-w-2xl sm:rounded-lg sm:shadow-md sm:px-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="font-extrabold text-navy-950">Notifications</h3>
          <span className="bg-blue-950 font-extrabold text-white text-sm rounded-sm px-3 py-px">
            {getNotificationUnreadAmount(state)}
          </span>
        </div>

        <button className="text-sm outline-none tr-d-200 hover:cursor-pointer hover:text-blue-950 focus:text-blue-950">
          Mark all as read
        </button>
      </header>

      <div className="flex flex-col gap-y-4">
        {state.map((nc) => (
          <NotificationCard key={nc.id} data={nc} />
        ))}
      </div>
    </section>
  );
}
