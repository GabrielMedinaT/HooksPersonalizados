import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";
import  TimeCounter from "./Components/TimeCounter";

export default function App() {
  return (
    <div>
      <UseCounter />
      <UserList />
      <WindowSizeApp />
      <TimeCounter />
    </div>
  );
}
