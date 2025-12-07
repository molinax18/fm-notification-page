import {
  type Notification,
  TNotificationType,
} from '../types/notification.type';

export const NOTIFICATION_MESSAGES: Record<
  keyof typeof TNotificationType,
  string
> = {
  [TNotificationType.REACTION]: 'reacted to your recent post',
  [TNotificationType.COMMENT]: 'commented on your post',
  [TNotificationType.FOLLOW]: 'followed you',
  [TNotificationType.GROUP_JOIN]: 'has joined your group',
  [TNotificationType.GROUP_LEAVE]: 'left the group',
  [TNotificationType.PRIVATE_MESSAGE]: 'sent you a private message',
  [TNotificationType.PICTURE_COMMENT]: 'commented on your picture',
};

export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    userImage: 'assets/images/avatar-mark-webber.webp',
    userName: 'Mark Webber',
    time: '1m ago',
    read: false,
    type: TNotificationType.REACTION,
    post: {
      id: 101,
      title: 'My first tournament today!',
    },
  },
  {
    id: 2,
    userImage: 'assets/images/avatar-angela-gray.webp',
    userName: 'Angela Gray',
    time: '5m ago',
    read: false,
    type: TNotificationType.FOLLOW,
  },
  {
    id: 3,
    userImage: 'assets/images/avatar-jacob-thompson.webp',
    userName: 'Jacob Thompson',
    time: '1 day ago',
    read: false,
    type: TNotificationType.GROUP_JOIN,
    group: {
      id: 1,
      name: 'Chess Club',
    },
  },
  {
    id: 4,
    userImage: 'assets/images/avatar-rizky-hasanuddin.webp',
    userName: 'Rizky Hasanuddin',
    time: '5 days ago',
    read: false,
    type: TNotificationType.PRIVATE_MESSAGE,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    userImage: 'assets/images/avatar-kimberly-smith.webp',
    userName: 'Kimberly Smith',
    time: '1 week ago',
    read: false,
    type: TNotificationType.PICTURE_COMMENT,
    post: {
      id: 202,
      imageUrl: 'assets/images/image-chess.webp',
      alt: 'Chess club',
    },
  },
  {
    id: 6,
    userImage: 'assets/images/avatar-nathan-peterson.webp',
    userName: 'Nathan Peterson',
    time: '2 weeks ago',
    read: true,
    type: TNotificationType.REACTION,
    post: {
      id: 303,
      title: '5 end-game strategies to increase your win rate',
    },
  },
  {
    id: 7,
    userImage: 'assets/images/avatar-anna-kim.webp',
    userName: 'Anna Kim',
    time: '2 weeks ago',
    read: true,
    type: TNotificationType.GROUP_LEAVE,
    group: {
      id: 1,
      name: 'Chess Club',
    },
  },
];
