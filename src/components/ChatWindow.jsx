import ChatInput from "./ChatInput";

function ChatWindow({ messages, onSend }) {
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
