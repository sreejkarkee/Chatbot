import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

import { useState } from "react";

function App() {
  function handleSend(message) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "user",
        text: message,
      },
    ]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "AI Babu",
          text: "I'm here to help!",
        },
      ]);
    }, 1000);
  }
  const [messages, setMessages] = useState([
    {
      sender: "AI Babu",
      text: "Hello, how can I help you today?",
    },
  ]);

  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />
        <ChatWindow messages={messages} onSend={handleSend}  />
      </div>
    </>
  );
}

export default App;
