import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";
import TimeCounter from "./Components/TimeCounter";
import { useState } from "react";

export default function App() {
  // Estados para mostrar/ocultar cada componente
  const [showUseCounter, setShowUseCounter] = useState(true);
  const [showUserList, setShowUserList] = useState(true);
  const [showWindowSizeApp, setShowWindowSizeApp] = useState(true);
  const [showTimeCounter, setShowTimeCounter] = useState(true);

  return (
    <div className="main">
      <h1>Hooks personalizados</h1>

      {/* Botón y estado para UseCounter */}
      <button onClick={() => setShowUseCounter(!showUseCounter)}>
        {showUseCounter ? "Ocultar UseCounter" : "Mostrar UseCounter"}
      </button>
      {showUseCounter && <UseCounter />}

      {/* Botón y estado para UserList */}
      <button onClick={() => setShowUserList(!showUserList)}>
        {showUserList ? "Ocultar UserList" : "Mostrar UserList"}
      </button>
      {showUserList && <UserList />}

      {/* Botón y estado para WindowSizeApp */}
      <button onClick={() => setShowWindowSizeApp(!showWindowSizeApp)}>
        {showWindowSizeApp ? "Ocultar WindowSizeApp" : "Mostrar WindowSizeApp"}
      </button>
      {showWindowSizeApp && <WindowSizeApp />}

      {/* Botón y estado para TimeCounter */}
      <button onClick={() => setShowTimeCounter(!showTimeCounter)}>
        {showTimeCounter ? "Ocultar TimeCounter" : "Mostrar TimeCounter"}
      </button>
      {showTimeCounter && <TimeCounter />}
    </div>
  );
}
