import ChatInput from "./ChatInput";
import { useState } from "react";
function ChatWindow({ messages, onSend }) {
  const [input, setInput] = useState("");
  return (
    <>
      <main className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <p key={index}>
              <strong>{message.sender}:</strong> {message.text}
            </p>
          ))}
        </div>

        <ChatInput onSend={onSend} />
      </main>
    </>
  );
}

export default ChatWindow;
