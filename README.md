# Chatty Project

## Project Summary

Chatty is a React-based chat application that allows users to chat with HealthifyBot in real-time. The application is built using Vite for fast development and includes styled-components for styling. The project structure is modular, with separate components for different functionalities such as chat and loader.

### 1. Setup Development Environment

- **Install Dependencies**: Run `yarn` to install all necessary dependencies.
- **Start Development Server**: Use `yarn dev` to start the Vite development server.

### 2. Tasks

As part of the interview, you'll be asked to complete the following tasks to complete and enhance the Chatty project.
These tasks are designed to test your skills in React, state management, error handling, and UI development.

#### Task 1: Implement Send Message Logic

- **Description**: Implement the logic to send a user's message and update the chat interface accordingly. Ensure the user's message is displayed in the chat before the bot's response is generated.

#### Task 2: Handle and Show the Error to the User

- **Description**: When an error occurs during the bot's response generation, display an appropriate error message to the user.

#### Task 3: Show a Loader When the Bot is Generating a Response

- **Description**: Display a loading indicator while the bot is generating its response to the user's message.

#### Task 4: Implement Error Retry Logic

- **Description**: Currently, when an error occurs in the chat, an error message is displayed, and the chat input is disabled. Implement a "Retry" button that allows the user to resend the last message when an error occurs.

#### Task 5: Add Message Timestamps

- **Description**: Add a timestamp to each message displayed in the chat. The timestamp should appear next to each message, indicating when it was sent or received.

#### Task 6: Persist Chat History

- **Description**: Implement chat history persistence so that the messages are saved even when the page is refreshed or reopened.

### 3. Project Structure

The project is organized as follows:

```plaintext
src/
│
├── components/
│   ├── Chat/
│   │   ├── Chat.tsx           // Chat component
│   │   ├── Chat.hooks.ts      // Custom hooks for chat state management
│   │   ├── Chat.styled.ts     // Styled components for chat UI
│   │   ├── Chat.types.ts      // TypeScript types for chat
│   │   ├── Chat.services.ts   // Service functions for chat operations
│   │   └── Chat.utilities.ts  // Utility functions for chat
│   ├── Loader/
│   │   └── Loader.tsx         // Loader component
│   └── ...
│
└── App.tsx                    // Main application component
└── index.tsx                  // Application entry point
```
