export type BotMessage = {
  role: "bot";
  message: string;
};

export type UserMessage = {
  role: "user";
  message: string;
};

export type Message = BotMessage | UserMessage;

export type Messages = Array<Message>;
