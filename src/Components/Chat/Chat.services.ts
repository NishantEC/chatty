import * as utilities from "./Chat.utilities";
import * as types from "./Chat.types";

export function getChatResponse(message: string): Promise<types.BotMessage> {
  console.log(`Sending message to bot: ${message}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldThrowError = message === "error";
      if (shouldThrowError) {
        reject(new Error("Failed to get response from the bot."));
      } else {
        const messageResponse = utilities.generateRandomMessage();
        const botMessage = utilities.getBotMessage(messageResponse);
        resolve(botMessage);
      }
    }, Math.random() * 5000);
  });
}
