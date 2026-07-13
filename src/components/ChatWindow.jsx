import ChatInput from "./ChatInput";
import Message from "./Message";
import {useEffect, useRef} from "react";

function ChatWindow({ messages, onSend }) {
  const messageRef = useRef(null);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <main className="chat-window">
      <div className="messages" ref={messageRef}>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </main>
  );
}

export default ChatWindow;
