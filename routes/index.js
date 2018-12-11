var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("home");
});

router.get("/home", function(req, res) {
  res.render("home");
});

router.get("/range", function(req, res) {
  res.render("range");
});

router.get("/classes-and-training", function(req, res) {
  res.render("classes-and-training");
});

module.exports = router;
