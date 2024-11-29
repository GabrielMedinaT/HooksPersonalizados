import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";
import TimeCounter from "./Components/TimeCounter";

export default function App() {

  

  return (
    <div>
      <h1>Hoocks personalizados</h1>
      <button>Use Counter</button>
      <UseCounter />
      <UserList />
      <WindowSizeApp />
      <TimeCounter />
    </div>
  );
}
