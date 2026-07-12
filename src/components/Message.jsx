function Message({ sender,text }) {
  return (
    <div className={`message ${sender === "user" ? "user" : "bot"}`}>
      <strong>{sender}</strong> :
      <p>{text}</p>
    </div>
  );
}

export default Message;