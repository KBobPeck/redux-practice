const router = require("express").Router();

const getAuth = (req, res) => {
  res.send("auth route");
};

router.route("/").get(getAuth);

module.exports = router;
