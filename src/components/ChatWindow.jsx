import ChatInput from "./ChatInput";
import { useState } from "react";
function ChatWindow({onSend}) {
  const [input, setInput] = useState("");
  return (
    <>
      <main className="chat-window">
        <div className="messages">
          <h3>Chat Area</h3>
        </div>
        
        <ChatInput onSend={onSend} />
      </main>
    </>
  );
}

export default ChatWindow;
