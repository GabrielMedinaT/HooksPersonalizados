import React from "react";
import { Countertimer } from "../Hooks";

export default function TimeCounter() {
  const countTimer = useCounter(0, 1000); // Inicializa el contador en 0 con un intervalo de 1 segundo.

  return <h1>Segundos transcurridos: {countTimer}</h1>;
}
