import { Countertimer } from "../Hooks";

export default function TimeCounter() {
  const countTimer = Countertimer(0, 1000); // Usa el nombre correcto del hook.

  return <h1>Segundos transcurridos: {countTimer}</h1>;
}
