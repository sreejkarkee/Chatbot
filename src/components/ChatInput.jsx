import { useState } from "react";

function ChatInput({onSend}) {
  //creating state
  const [input, setInput] = useState("");
  return (
    <>
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onSend(input)}>Send</button>
    </div>
    <p>{input}</p>
    </>

  );
}

export default ChatInput;
