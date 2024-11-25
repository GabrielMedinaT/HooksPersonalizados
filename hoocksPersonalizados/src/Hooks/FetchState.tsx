// Este hook encapsula la lógica de fetch para simplificar componentes.
import { useState, useEffect } from 'react';

// Definimos los tipos de datos devueltos por el hook.
type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// Hook personalizado: `useFetch`
export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función para manejar el fetch de datos.
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener los datos');
        const result = await response.json();
        setData(result);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any 
      } catch (err: any) { //el comentario anterior es para que no marque error en la siguiente línea, es un comentario especial para que no marque error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
