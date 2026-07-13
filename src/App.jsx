import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import { getAIResponse } from "./services/gemini";

import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "AI Babu",
      text: "Hello, how can I help you today?",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSend(message) {
    if (!message.trim()) return;

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setIsLoading(true);

    try {
      // Get AI response
      const reply = await getAIResponse(message);

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          sender: "AI Babu",
          text: reply,
        },
      ]);
    } catch (error) {
      // Show error message
      setMessages((prev) => [
        ...prev,
        {
          sender: "AI Babu",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      // Stop loading whether success or error
      setIsLoading(false);
    }
  }

  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />
        <ChatWindow
          messages={messages}
          onSend={handleSend}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;