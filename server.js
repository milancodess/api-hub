import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API Hub running at http://localhost:${PORT}`);
});
