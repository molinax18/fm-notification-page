export enum TNotificationType {
  REACTION = 'REACTION',
  COMMENT = 'COMMENT',
  FOLLOW = 'FOLLOW',
  GROUP_JOIN = 'GROUP_JOIN',
  GROUP_LEAVE = 'GROUP_LEAVE',
  PRIVATE_MESSAGE = 'PRIVATE_MESSAGE',
  PICTURE_COMMENT = 'PICTURE_COMMENT',
}

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
