import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setState(json))
      .catch((error) => console.error("Error al cargar datos:", error))
      .finally(() => setLoading(false));
  }, []);

  return { state, loading };
}

// Al importar el useFetch debe hacerse como:
// const { state,loading } = useFetch('https://apiurl')
