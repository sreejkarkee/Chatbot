import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from './components/ChatInput';

import { useState } from "react";

function App() {

  const[messages, setMessages] = useState([{
    sender:"bot",
    text:"Hello, how can I help you today?"
  }]);


  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />
        <ChatWindow />
      </div>
    </>
  );
}

export default App;
