import express from "express";
import bodyParser from "body-parser";
import demoRouter from "./src/routes/demo.routes";
import moviesRouter from "./src/routes/movies.routes";
import userRouter from "./src/routes/user.routes";
import mongoose from "mongoose";

const app = express();
const port = 3000;

export const secret = "secret";

mongoose.connect("mongodb://localhost:27017/demo");

app.use(bodyParser.json());

app.use("/demo", demoRouter);
app.use("/movies", moviesRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
