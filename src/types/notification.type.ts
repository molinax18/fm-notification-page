const NotificationType = {
  REACTION: 'reaction',
  COMMENT: 'comment',
  FOLLOW: 'follow',
  GROUP_JOIN: 'group_join',
  GROUP_LEAVE: 'group_leave',
  PRIVATE_MESSAGE: 'private_message',
  PICTURE_COMMENT: 'picture_comment',
} as const;

export type TNotificationType =
  (typeof NotificationType)[keyof typeof NotificationType];

export type Notification = {
  id: number;
  userImage: string;
  userName: string;
  time: string;
  read: boolean;
  type: TNotificationType;
  post?: {
    id: number;
    title?: string;
    imageUrl?: string;
    alt?: string;
  };
  group?: {
    id: number;
    name: string;
  };
  message?: string;
};

// type Reaction = BaseNotification & {
//   type: TNotificationType;
//   post: {
//     id: number;
//     title?: string;
//   };
// };

// type Comment = BaseNotification & {
//   type: TNotificationType;
//   post: {
//     id: number;
//     imageUrl?: string;
//   };
// };

// type Follow = BaseNotification & {
//   type: TNotificationType;
// };

// type GroupJoin = BaseNotification & {
//   type: TNotificationType;
//   group: {
//     id: number;
//     name: string;
//   };
// };

// type GroupLeave = BaseNotification & {
//   type: TNotificationType;
//   group: {
//     id: number;
//     name: string;
//   };
// };

// type PrivateMessage = BaseNotification & {
//   type: TNotificationType;
//   message: string;
// };

// type PictureComment = BaseNotification & {
//   type: TNotificationType;
//   picture: {
//     url: string;
//   };
// };

// export type Notification =
//   | Reaction
//   | Comment
//   | Follow
//   | GroupJoin
//   | GroupLeave
//   | PrivateMessage
//   | PictureComment;
