// Este hook reutiliza la lógica de un contador con incremento y decremento.
// Escribimos en TypeScript para garantizar tipado y mejor mantenimiento.

import { useState } from 'react';

// Definimos el tipo de entrada y el estado del hook.
type CounterHook = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Hook personalizado: `useCounter`
export function useCounter(initialValue: number = 0): CounterHook {
  const [count, setCount] = useState<number>(initialValue);

  // Funciones de incremento y decremento.
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  // Retornamos el estado y las funciones.
  return { count, increment, decrement };
}
