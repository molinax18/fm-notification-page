import type { Notification } from '../types/notification.type';

export const notifications: Notification[] = [
  {
    id: 1,
    userImage: '/images/avatar-mark-webber.webp',
    userName: 'Mark Webber',
    time: '1m ago',
    read: false,
    type: 'reaction',
    post: {
      id: 101,
      title: 'My first tournament today!',
    },
  },
  {
    id: 2,
    userImage: '/images/avatar-angela-gray.webp',
    userName: 'Angela Gray',
    time: '5m ago',
    read: false,
    type: 'follow',
  },
  {
    id: 3,
    userImage: '/images/avatar-jacob-thompson.webp',
    userName: 'Jacob Thompson',
    time: '1 day ago',
    read: false,
    type: 'group_join',
    group: {
      id: 1,
      name: 'Chess Club',
    },
  },
  {
    id: 4,
    userImage: '/images/avatar-rizky-hasanuddin.webp',
    userName: 'Rizky Hasanuddin',
    time: '5 days ago',
    read: true,
    type: 'private_message',
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    userImage: '/images/avatar-kimberly-smith.webp',
    userName: 'Kimberly Smith',
    time: '1 week ago',
    read: true,
    type: 'comment',
    post: {
      id: 202,
      imageUrl: '/images/commented-picture.webp',
    },
  },
  {
    id: 6,
    userImage: '/images/avatar-nathan-peterson.webp',
    userName: 'Nathan Peterson',
    time: '2 weeks ago',
    read: true,
    type: 'reaction',
    post: {
      id: 303,
      title: '5 end-game strategies to increase your win rate',
    },
  },
  {
    id: 7,
    userImage: '/images/avatar-anna-kim.webp',
    userName: 'Anna Kim',
    time: '2 weeks ago',
    read: true,
    type: 'group_leave',
    group: {
      id: 1,
      name: 'Chess Club',
    },
  },
];
