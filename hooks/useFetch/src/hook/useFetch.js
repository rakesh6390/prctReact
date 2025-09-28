import { useEffect, useState } from "react";

export function usePostTitle(shouldFetch) {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const text = await response.text();
    setPost({ title: text });
  }

  useEffect(() => {
    if (shouldFetch) {
      getPosts();
    }
  }, [shouldFetch]);//dependency array (whenever shouldFetch changes rendering will occur in useEffect)

  return post.title || "";
}
