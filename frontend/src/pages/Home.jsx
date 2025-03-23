import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        setContent("");
        navigate("/posts");
      }
    } catch (err) {
      console.error("Failed to submit post", err);
    }
  };

  return (
    <div className="home">
      <h1>Create a Post</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
        rows="5"
      />
      <button onClick={handleSubmit}>Submit Post</button>
      <button className="read-posts" onClick={() => navigate("/posts")}>
        Read Posts
      </button>
    </div>
  );
}

export default Home;
