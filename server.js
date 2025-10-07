// server.js
import express from "express";
import animeRoutes from "./routes/anime/index.js";
import downloaderRoutes from "./routes/downloader/index.js";
import toolsRoutes from "./routes/tools/index.js";
import newsRoutes from "./routes/news/index.js";

const app = express();
app.use(express.json());

// Register category routes
app.use("/api/anime", animeRoutes);
app.use("/api/downloader", downloaderRoutes);
app.use("/api/tools", toolsRoutes);
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API Hub running at http://localhost:${PORT}`);
});
