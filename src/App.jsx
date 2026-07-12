import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from './components/ChatInput';

function App() {
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
