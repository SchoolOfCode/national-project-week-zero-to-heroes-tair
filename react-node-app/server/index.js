import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/energisers/1", (req, res) => {
  res.json({ message: "Appy days!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
