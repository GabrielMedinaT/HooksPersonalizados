// Este componente muestra las dimensiones actuales de la ventana.
import { useWindowSize } from "../Hooks";

export default function WindowSizeApp() {
  // Obtenemos el tamaño actual usando el hook.
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Window Size</h1>
      <p>
        Width: {width}px | Height: {height}px
      </p>
    </div>
  );
}
