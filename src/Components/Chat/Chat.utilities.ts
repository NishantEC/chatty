import * as CONSTANTS from "./Chat.constants";
import * as types from "./Chat.types";

export function generateRandomMessage() {
  const randomIndex = Math.floor(
    Math.random() * CONSTANTS.DUMMY_RESPONSES.length
  );
  return CONSTANTS.DUMMY_RESPONSES[randomIndex];
}

export function getBotMessage(message: string): types.BotMessage {
  return {
    role: "bot",
    message,
  };
}

export function getUserMessage(message: string): types.UserMessage {
  return {
    role: "user",
    message,
  };
}
