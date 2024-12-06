import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Estado inicial basado en la conexión
  const [isReconnecting, setIsReconnecting] = useState(false); // Estado de reconexión
  const [statusMessage, setStatusMessage] = useState(""); // Mensaje de guardado

  useEffect(() => {
    function handleOnline() {
      setIsReconnecting(true); // Empieza a reconectar
      setTimeout(() => {
        setIsOnline(true); // Cambia a en línea después de 3 segundos
        setIsReconnecting(false); // Finaliza el proceso de reconexión
      }, 3000);
    }

    function handleOffline() {
      setIsOnline(false); // Cambia a desconectado inmediatamente
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSaveClick() {
    setStatusMessage("Progreso guardado con éxito ✅"); // Actualiza el mensaje
    setTimeout(() => setStatusMessage(""), 2000); // Limpia el mensaje después de 2 segundos
  }

  return (
    <div>

      <button disabled={!isOnline || isReconnecting} onClick={handleSaveClick}>
        {isReconnecting
          ? "Reconectando..." // Durante reconexión
          : "Guardar progreso"}{" "}
      </button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}
