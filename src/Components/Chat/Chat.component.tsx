import {
  ChatContainer,
  Header,
  MessagesWrapper,
  UserMessage,
  BotMessage,
  Button,
  ErrorMessagesWrapper,
  Form,
  StyledInput,
} from "./Chat.styled";

import * as hooks from "./Chat.hooks";
import { useState } from "react";
import Loader from "../Loader";

function Chat() {
  const { messages,sendMessage, isLoading } = hooks.useChat();
  const [userMsg, setUserMsg] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(userMsg);
    setUserMsg("");
  };

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

        {isLoading && <Loader />}

        <ErrorMessagesWrapper>Error goes here</ErrorMessagesWrapper>
        <Form onSubmit={handleSubmit}>
          <StyledInput 
            type="text"
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </Form>
      </MessagesWrapper>
    </ChatContainer>
  );
}

export default Chat;
