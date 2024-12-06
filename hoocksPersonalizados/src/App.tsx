import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";
import TimeCounter from "./Components/TimeCounter";
import OnlineOffline from "./Components/OnlineOffline";
import GuardarEstado from "./Components/GuardarEstado";
import Animations from "./Components/Animations";
import { useState } from "react";

export default function App() {
  // Estados para mostrar/ocultar cada componente
  const [showUseCounter, setShowUseCounter] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [showWindowSizeApp, setShowWindowSizeApp] = useState(false);
  const [showTimeCounter, setShowTimeCounter] = useState(false);
  const [showOnlineOffline, setShowOnlineOffline] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);

  return (
    <div className="landing">
      <h1>Hooks personalizados para presentación</h1>

      {/* Botón y estado para SaveButton */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowSaveButton((prevState) => !prevState)}
        >
          {showSaveButton ? "Ocultar SaveButton" : "Mostrar SaveButton"}
        </button>
      </div>
      {showSaveButton && <GuardarEstado />}

      {/* Botón y estado para OnlineOffline */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowOnlineOffline(!showOnlineOffline)}
        >
          {showOnlineOffline
            ? "Ocultar OnlineOffline"
            : "Mostrar OnlineOffline"}
        </button>
      </div>
      {showOnlineOffline && <OnlineOffline />}

      {/* Botón y estado para UseCounter */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowUseCounter(!showUseCounter)}
        >
          {showUseCounter ? "Ocultar UseCounter" : "Mostrar UseCounter"}
        </button>
      </div>
      {showUseCounter && <UseCounter />}

      {/* Botón y estado para UserList */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowUserList(!showUserList)}
        >
          {showUserList ? "Ocultar UserList" : "Mostrar UserList"}
        </button>
      </div>
      {showUserList && <UserList />}

      {/* Botón y estado para WindowSizeApp */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowWindowSizeApp(!showWindowSizeApp)}
        >
          {showWindowSizeApp
            ? "Ocultar WindowSizeApp"
            : "Mostrar WindowSizeApp"}
        </button>
      </div>
      {showWindowSizeApp && <WindowSizeApp />}

      {/* Botón y estado para TimeCounter */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowTimeCounter(!showTimeCounter)}
        >
          {showTimeCounter ? "Ocultar TimeCounter" : "Mostrar TimeCounter"}
        </button>
      </div>
      {showTimeCounter && <TimeCounter />}

      {/* Botón y estado para Animations */}
      <div className="botones">
        <button
          className="boton"
          onClick={() => setShowAnimations(!showAnimations)}
        >
          {showAnimations ? "Ocultar Animations" : "Mostrar Animations"}
        </button>
      </div>
      {showAnimations && <Animations />}
    </div>
  );
}
