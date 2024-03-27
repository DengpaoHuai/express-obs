import express from "express";
import bodyParser from "body-parser";
import demoRouter from "./src/routes/demo.routes";
import moviesRouter from "./src/routes/movies.routes";
import userRouter from "./src/routes/user.routes";
import mongoose from "mongoose";
import { Worker } from "worker_threads";
import session from "express-session";

const app = express();
const port = 3000;

export const secret = "secret";

//mongoose.connect("mongodb://localhost:27017/demo");

app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/demo", demoRouter);
app.use("/movies", moviesRouter);
app.use("/users", userRouter);

/*app.get("/block-router", (req, res) => {
  for (let i = 0; i < 1000000000000000; i++) {}
  res.send("Blocked for a while");
});*/

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/demo-ejs", (req, res) => {
  res.render("demo", { name: "John Doe" });
});

app.get("/start-worker", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", (result) => {
    console.log(`Le résultat de la tâche longue est : ${result}`);
    res.status(200).json(result);
  });

  worker.postMessage("start");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
