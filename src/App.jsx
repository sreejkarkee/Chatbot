import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from './components/ChatInput';

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <ChatWindow />
      <ChatInput />
    </>
  );
}

export default App;
