const NotificationType = {
  REACTION: 'reaction',
  COMMENT: 'comment',
  FOLLOW: 'follow',
  GROUP_JOIN: 'group_join',
  GROUP_LEAVE: 'group_leave',
  PRIVATE_MESSAGE: 'private_message',
  PICTURE_COMMENT: 'picture_comment',
} as const;

export type NotificationType =
  (typeof NotificationType)[keyof typeof NotificationType];

type BaseNotification = {
  id: number;
  userImage: string;
  userName: string;
  time: string;
  read: boolean;
};

type Reaction = BaseNotification & {
  type: NotificationType;
  post: {
    id: number;
    title?: string;
  };
};

type Comment = BaseNotification & {
  type: NotificationType;
  post: {
    id: number;
    imageUrl?: string;
  };
};

type Follow = BaseNotification & {
  type: NotificationType;
};

type GroupJoin = BaseNotification & {
  type: NotificationType;
  group: {
    id: number;
    name: string;
  };
};

type GroupLeave = BaseNotification & {
  type: NotificationType;
  group: {
    id: number;
    name: string;
  };
};

type PrivateMessage = BaseNotification & {
  type: NotificationType;
  message: string;
};

type PictureComment = BaseNotification & {
  type: NotificationType;
  picture: {
    url: string;
  };
};

export type Notification =
  | Reaction
  | Comment
  | Follow
  | GroupJoin
  | GroupLeave
  | PrivateMessage
  | PictureComment;
