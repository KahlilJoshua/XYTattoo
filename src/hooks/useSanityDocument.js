import { useEffect, useState } from "react";
import { client } from "../sanity"; // Your Sanity client instance

export function useSanityDocument(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on new query
    setData(null); // Clear data while loading new

    client
      .fetch(query, params)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, JSON.stringify(params)]); // Re-run if query or params change

  return { data, loading, error };
}
