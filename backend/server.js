import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js"; // Sequelize ORM
import pool from "./config/pg.js"; // Raw SQL (pg)
import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// 🔹 Test Sequelize Connection
sequelize.sync()
  .then(() => console.log("✅ Sequelize connected to PostgreSQL & synced database"))
  .catch((err) => console.error("❌ Sequelize connection error:", err));

// 🔹 Test pg (Raw SQL) Connection
pool.connect()
  .then(() => console.log("✅ pg (Raw SQL) connected to PostgreSQL"))
  .catch((err) => console.error("❌ pg (Raw SQL) connection error:", err));

// 🔹 Routes
app.use("/posts", postRoutes);

// 🔹 Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));

