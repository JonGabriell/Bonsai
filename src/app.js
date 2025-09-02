import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "bonsai-api" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
