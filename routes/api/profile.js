const router = require("express").Router();

const getProfile = (req, res) => {
  res.send("profile route");
};

router.route("/").get(getProfile);

module.exports = router;
