import express from "express";
import cors from "cors";

import indexRouter from "../routes/index.js";

const PORT = process.env.PORT || 3001;

const app = express();
// app.use(function (req, res, next) {
//   req.set("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(
  cors({
    origin: "*",
  })
);

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get("/energisers/3", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ message: "Appy days!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
