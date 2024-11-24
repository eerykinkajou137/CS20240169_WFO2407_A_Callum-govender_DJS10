import { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/postsss"
        );
        if (!response.ok) {
          //Check if the res is ok
          throw new Error("Failed to fetch posts. Please try again later.");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  // Rendering UI
  return (
    <div>
      <h1>Blog Posts</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPosts;
