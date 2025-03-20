import express from "express";
import pool from "../config/pg.js"; // PostgreSQL raw SQL (pg)
import Post from "../models/Post.js"; // Sequelize Model

const router = express.Router();

// 🔹 Get All Posts (Using Sequelize)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [["createdAt", "DESC"]] }); // Sequelize ORM
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Get All Posts (Using Raw SQL)
router.get("/raw", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY createdAt DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Add a New Post (Using Sequelize)
router.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: "Post content required" });

    const post = await Post.create({ content }); // Sequelize ORM
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Add a New Post (Using Raw SQL)
router.post("/raw", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: "Post content required" });

    const result = await pool.query(
      "INSERT INTO posts (content) VALUES ($1) RETURNING *",
      [content]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Delete a Post by ID (Using Sequelize)
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await post.destroy();
    res.status(204).send(); // No Content response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Delete a Post by ID (Using Raw SQL)
router.delete("/raw/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
