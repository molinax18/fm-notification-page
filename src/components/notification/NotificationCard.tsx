import type { Notification } from '../../types/notification.type';
import { getNotificationMessageByType } from '../../utils/notification.util';

export default function NotificationCard({ data }: { data: Notification }) {
  const { userImage, userName, time, read, type, group, post, message } = data;

  const applyExtraStyles = () => {
    if (group) {
      return <span className="font-bold text-blue-950">{group.name}</span>;
    }

    if (post?.title) {
      return <span className="font-bold text-gray-600">{post.title}</span>;
    }

    return '';
  };

  return (
    <article
      className={`flex items-center gap-x-3 ${read ? 'bg-transparent' : 'bg-navy-50'} text-sm p-3 rounded-md`}
    >
      <img className="size-8 self-start" src={userImage} alt={userName} />

      <div className="grow">
        <p>
          <span className="font-extrabold text-navy-950">{userName}</span>{' '}
          {getNotificationMessageByType(type)} {applyExtraStyles()}{' '}
          {!read && (
            <span className="after:text-red-500 after:content-['●']"></span>
          )}
        </p>

        <span>{time}</span>

        {message && (
          <p className="border border-navy-100 p-2 mt-2">{message}</p>
        )}
      </div>

      {post?.imageUrl && (
        <img className="size-8 self-start" src={post.imageUrl} alt={post.alt} />
      )}
    </article>
  );
}
