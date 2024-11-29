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
  const { data, loading, error } = useFetch<Character[]>(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Personajes</h1>
      <ul>
        {data?.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>
              {character.species} - {character.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
