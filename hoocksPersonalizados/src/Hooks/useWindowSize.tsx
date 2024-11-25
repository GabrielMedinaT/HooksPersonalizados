// Este hook escucha los cambios en las dimensiones de la ventana.
import { useState, useEffect } from "react";

// Definimos el tipo para el estado de las dimensiones.
type WindowSize = {
  width: number;
  height: number;
};

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agregamos el evento de resize.
    window.addEventListener("resize", handleResize);
    return () => {
      // Limpiamos el evento al desmontar.
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
