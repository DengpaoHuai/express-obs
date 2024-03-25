const { post, get } = require("../controllers/demoController");

const router = require("express").Router();

router.get("/", get);

router.post("/", post);

module.exports = router;
