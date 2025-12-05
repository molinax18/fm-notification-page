import type { Dispatch, SetStateAction } from 'react';

type Mentions = 'group' | 'message' | 'comment';

export type Message = {
  id: number;
  userImage: string;
  name: string;
  content: string;
  time: string;
  typeMention?: Mentions;
  read: boolean;
};

export type MessageContext = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};
