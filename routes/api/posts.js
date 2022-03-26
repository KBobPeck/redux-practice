const router = require("express").Router();

const getPosts = (req, res) => {
  res.send("posts route");
};

router.route("/").get(getPosts);

module.exports = router;
