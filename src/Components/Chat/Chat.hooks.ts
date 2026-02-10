import { useState } from "react";

import * as types from "./Chat.types";
// import * as services from "./Chat.services";
import * as utilities from "./Chat.utilities";
import * as CONSTANTS from "./Chat.constants";
import * as services from "./Chat.services";


export function useChat() {
  const [messages, setMessages] = useState<types.Messages>([
    utilities.getBotMessage(CONSTANTS.FIRST_BOT_MESSAGE),
  ]);

  const [isLoading, setIsLoading] = useState(false)

  async function sendMessage(userText: string) {
    if (!userText.trim()) return;

    const userMessage = utilities.getUserMessage(userText);

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true)

    try {
      const botMessage = await services.getChatResponse(userText);

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      
      const errorMessage = utilities.getBotMessage(
        "Something went wrong. Please try again."
      );
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    setMessages,
    sendMessage,
    isLoading
  };
}
