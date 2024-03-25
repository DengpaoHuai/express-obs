import express from "express";
import bodyParser from "body-parser";
import demoRouter from "./src/routes/demo.routes";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/demo");

app.use(bodyParser.json());

app.use("/demo", demoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
