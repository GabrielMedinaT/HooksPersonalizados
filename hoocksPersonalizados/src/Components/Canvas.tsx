import React, { useState, useEffect } from "react";
import { usePointerPosition } from "./UsePointerPosition";

function useDelayedValue<T>(value: T, delay: number): T {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 50);
  const pos3 = useDelayedValue(pos2, 100);
  const pos4 = useDelayedValue(pos3, 150);
  const pos5 = useDelayedValue(pos4, 200);

  return (
    <>
      <Dot position={pos1} opacity={1} previousPosition={pos2} />
      <Dot position={pos2} opacity={0.8} previousPosition={pos3} />
      <Dot position={pos3} opacity={0.6} previousPosition={pos4} />
      <Dot position={pos4} opacity={0.4} previousPosition={pos5} />
      <Dot position={pos5} opacity={0.2} previousPosition={null} />
    </>
  );
}

type DotProps = {
  position: { x: number; y: number };
  previousPosition: { x: number; y: number } | null;
  opacity: number;
};

function Dot({ position, previousPosition, opacity }: DotProps) {
  const [dimensions, setDimensions] = useState({ width: 40, height: 40 });

  useEffect(() => {
    if (previousPosition) {
      const deltaX = position.x - previousPosition.x;
      const deltaY = position.y - previousPosition.y;

      // Incrementamos el stretchFactor para deformación más pronunciada
      const stretchFactor = Math.min(
        8, // Límite máximo de estiramiento
        Math.sqrt(deltaX ** 2 + deltaY ** 2) / 5 // Ajuste para mayor sensibilidad
      );

      setDimensions({
        width: 40 + stretchFactor * 15, // Aumenta el ancho proporcionalmente
        height: Math.max(20, 40 - stretchFactor * 10), // Reduce el alto, con un mínimo
      });
    }
  }, [position, previousPosition]);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        transition:
          "opacity 0.3s ease-out, transform 0.3s ease-out, width 0.1s ease-out, height 0.1s ease-out",
        left: -dimensions.width / 2,
        top: -dimensions.height / 2,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
}
