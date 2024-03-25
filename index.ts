import express from "express";
import bodyParser from "body-parser";
import demoRouter from "./src/routes/demo.routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/demo", demoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
