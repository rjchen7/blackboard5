import React, { FunctionComponent, useCallback } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { Message } from './MainTabScreen';

type ChatScreenProps = {
  chatId: number;
  messagesMap: Map<number, Message[]>;
};

const renderBubble: FunctionComponent<any> = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: 'pink',
        },
        left: {
          backgroundColor: '#fff',
        },
      }}
      textStyle={{
        right: {
          color: 'black',
        },
        left: {
          color: 'black',
        },
      }}
    />
  );
};

const ChatScreen = ({ chatId, messagesMap }: ChatScreenProps) => {
  console.log(messagesMap.get(chatId));

  const [messages, setMessages] = React.useState([]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messagesMap.get(chatId)}
      onSend={(newMessages) => {
        onSend(newMessages);
        messagesMap.set(chatId, [
          ...newMessages,
          ...(messagesMap.get(chatId) || []),
        ]);
      }}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      inverted={true}
    />
  );
};

export default ChatScreen;
