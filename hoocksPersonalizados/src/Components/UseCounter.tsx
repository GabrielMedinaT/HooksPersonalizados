// Este componente utiliza el hook `useCounter` en dos contadores independientes.

import { useCounter } from "../Hooks";

export default function CounterApp() {
  // Contador con valor inicial predeterminado (0).
  const counterA = useCounter();
  // Contador con un valor inicial de 10.
  const counterB = useCounter(10);

  return (
    <div>
      <h1>Custom Hook: Counter</h1>

      {/* Counter A */}
      <div>
        <h2>Counter A: {counterA.count}</h2>
        <button onClick={counterA.increment}>Increment Aa</button>
        <button onClick={counterA.decrement}>Decrement A</button>
      </div>

      {/* Counter B */}
      <div>
        <h2>Counter B: {counterB.count}</h2>
        <button onClick={counterB.increment}>Increment B</button>
        <button onClick={counterB.decrement}>Decrement B</button>
      </div>
    </div>
  );
}
