import React from "react";
import { useFetch } from "../Hooks";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export default function CharacterList() {
  // El tipo del fetch incluye el formato de la API (info + results)
  const { data, loading, error } = useFetch<{ results: Character[] }>(
    "https://rickandmortyapi.com/api/character"
  );

  // Mostrar estados de carga y errores
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Personajes</h1>
      <ul>
        {data?.results.map((character) => (
          <li key={character.id}>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <p>
              <strong>{character.name}</strong>
            </p>
            <p>
              {character.species} ({character.gender}) - {character.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
