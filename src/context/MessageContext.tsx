import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Message, MessageContext } from './messageContext.type';

const MessageContext = createContext<MessageContext | null>(null);

export const MessageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () =>
  useContext(MessageContext) as MessageContext;
