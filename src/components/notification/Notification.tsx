import { useNotificationContext } from '../../contexts/NotificationContext';

import NotificationCard from './NotificationCard';

export default function Notification() {
  const { state } = useNotificationContext();
  const getNotificationUnreadAmount = () => {
    return state.reduce((acc, n) => (!n.read ? acc + 1 : acc), 0);
  };

  return (
    <section className="flex flex-col gap-y-6 bg-white h-full py-6 px-4 sm:h-auto sm:w-full sm:max-w-lg sm:rounded-lg sm:shadow-md sm:px-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="font-bold text-navy-950">Notifications</h3>
          <span className="bg-blue-950 font-bold text-white text-sm rounded-sm px-3 py-px">
            {getNotificationUnreadAmount()}
          </span>
        </div>

        <button className="text-sm outline-none tr-d-200 hover:cursor-pointer hover:text-blue-950 focus:text-blue-950">
          Mark all as read
        </button>
      </header>

      <div>
        {state.map((nc) => (
          <NotificationCard key={nc.id} data={nc} />
        ))}
      </div>
    </section>
  );
}
