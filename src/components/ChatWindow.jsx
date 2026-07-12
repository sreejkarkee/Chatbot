import ChatInput from "./ChatInput";
import Message from "./Message";

function ChatWindow({ messages, onSend }) {
  return (
    <main className="chat-window">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </main>
  );
}

export default ChatWindow;
