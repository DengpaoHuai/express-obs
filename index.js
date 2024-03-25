const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/demo", require("./src/routes/demo.routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
