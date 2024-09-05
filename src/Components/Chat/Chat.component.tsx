import {
  ChatContainer,
  Header,
  MessagesWrapper,
  UserMessage,
  BotMessage,
  Button,
  ErrorMessagesWrapper,
  InputWrapper,
  StyledInput,
} from "./Chat.styled";

import * as hooks from "./Chat.hooks";

function Chat() {
  const { messages } = hooks.useChat();

  return (
    <ChatContainer>
      <Header>HealthifyChat</Header>
      <MessagesWrapper>
        {messages.map((message, index) => (
          <>
            {message.role === "user" ? (
              <UserMessage key={index}>{message.message}</UserMessage>
            ) : (
              <BotMessage key={index}>{message.message}</BotMessage>
            )}
          </>
        ))}
        <ErrorMessagesWrapper>Error goes here</ErrorMessagesWrapper>
        <InputWrapper>
          <StyledInput />
          <Button>Send</Button>
        </InputWrapper>
      </MessagesWrapper>
    </ChatContainer>
  );
}

export default Chat;
