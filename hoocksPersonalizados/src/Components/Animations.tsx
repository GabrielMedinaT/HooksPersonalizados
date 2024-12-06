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

function Dot({
  position,
  previousPosition,
  opacity,
}: {
  position: { x: number; y: number };
  previousPosition: { x: number; y: number } | null;
  opacity: number;
}) {
  // Calcula el ángulo dinámico del degradado
  const angle = previousPosition
    ? (Math.atan2(
        position.y - previousPosition.y,
        position.x - previousPosition.x
      ) *
        180) /
      Math.PI
    : 0;

  return (
    <div
      style={{
        position: "absolute",
        background: `linear-gradient(${angle}deg, #e81cff 0%, #40c9ff 100%)`,
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        boxShadow: `0 0 10px 5px rgba(232, 28, 255, 0.5), 0 0 20px 10px rgba(64, 201, 255, 0.5)`, // Brillo exterior
      }}
    />
  );
}

export default function Canvas() {
  const pos = usePointerPosition();
  const [prevPosition, setPrevPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    setPrevPosition(pos);
  }, [pos]);

  // Generar 100 posiciones retrasadas
  const dots = Array.from({ length: 100 }, (_, index) => {
    const delay = index * 1.5; // Retraso creciente
    const opacity = Math.max(1 - index * 0.1, 0); // Opacidad decreciente
    const delayedPosition = useDelayedValue(pos, delay);
    return (
      <Dot
        key={index}
        position={delayedPosition}
        previousPosition={prevPosition}
        opacity={opacity}
      />
    );
  });

  return <>{dots}</>;
}
