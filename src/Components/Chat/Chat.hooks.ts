import { useState } from "react";

import * as types from "./Chat.types";
// import * as services from "./Chat.services";
import * as utilities from "./Chat.utilities";
import * as CONSTANTS from "./Chat.constants";

export function useChat() {
  const [messages, setMessages] = useState<types.Messages>([
    utilities.getBotMessage(CONSTANTS.FIRST_BOT_MESSAGE),
  ]);
  // const [input, setInput] = useState<string>("");
  // const [isChatPending, setIsChatPending] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function sendMessage() {}

  return {
    messages,
    setMessages,
    //   input,
    //   setInput,
    sendMessage,
    //   isChatPending,
    //   errorMessage,
  };
}
