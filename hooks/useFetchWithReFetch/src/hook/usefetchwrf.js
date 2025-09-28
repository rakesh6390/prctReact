import { useEffect, useState } from "react";

export function usePostTitle(shouldFetch) {
  const [data, setData] = useState(null);

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json(); // ✅ parse JSON
    setData(json);
  }

  useEffect(() => {
    if (shouldFetch) {
      getPosts();
    }
  }, [shouldFetch]);

  return data;
}
