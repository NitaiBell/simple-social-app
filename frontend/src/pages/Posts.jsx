import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleUpdate = async (id, newContent) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent }),
    });

    if (res.ok) {
      const updated = await res.json();
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? updated : p))
      );
    }
  };

  return (
    <div className="posts-page">
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
}

export default Posts;

