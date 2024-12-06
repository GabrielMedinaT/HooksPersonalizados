import { useState, useEffect } from "react";
import "./Onlinne.css";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(false); // Comienza como Desconectado

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOnline(true); // Cambia a En línea después de 5 segundos
    }, 5000);

    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Limpieza
    return () => {
      clearTimeout(timer); // Limpia el temporizador
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className={isOnline ? "notloader" : "loader"}>
      {isOnline ? "✅ En línea" : ""}
    </div>
  );
}
