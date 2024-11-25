import React from "react";
import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";

export default function App() {
  return (
    <div>
      <UseCounter />
      <UserList />
      <WindowSizeApp />
    </div>
  );
}
