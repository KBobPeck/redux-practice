const router = require("express").Router();

const getUsers = (req, res) => {
  res.send("users route");
};

router.route("/").get(getUsers);

module.exports = router;
