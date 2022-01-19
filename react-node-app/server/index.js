import express from "express";


import indexRouter from "../routes/index.js";


const PORT = process.env.PORT || 3001;

const app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


export default app;

