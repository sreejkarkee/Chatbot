import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend(input);
            setInput("");
          }
        }}
      />

      <button
        onClick={() => {
          onSend(input);
          setInput(""); // Clear the input after sending
        }}
      
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
