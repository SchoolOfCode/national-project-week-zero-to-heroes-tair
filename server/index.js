import express from "express";
import cors from "cors";

import indexRouter from "../routes/index.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// app.use(
//   cors({
//     origin: [
//       "https://zen-ergise.netlify.app/",
//       "https://zen-ergise.herokuapp.com/",
//     ],
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/", indexRouter);

// app.get("/energisers/3", (req, res, next) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   res.json({ message: "Appy days!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
