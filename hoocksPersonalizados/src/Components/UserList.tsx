// Este componente utiliza el hook `useFetch` para mostrar datos de usuarios.

import React from "react";
import { useFetch } from "../Hooks";

// Definimos el tipo de datos esperados en el fetch.
type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  // Llamada al hook con la URL del API.
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Mientras carga...
  if (loading) return <p>Loading...</p>;
  // Si hay error...
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* Mapear los datos obtenidos */}
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
