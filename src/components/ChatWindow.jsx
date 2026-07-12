import ChatInput from "./ChatInput";
function ChatWindow() {
  return (
    <>
      <main className="chat-window">
        <div className="messages">
          <h3>Chat Area</h3>
          <p>Hello, how can I help you today?</p>
        </div>
      <ChatInput />
      </main>
    </>
  );
}

export default ChatWindow;
