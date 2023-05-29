var express = require("express");
var router = express.Router();

var sentimentController = require("../controllers/sentiment/sentiment.controller");

// Set Cors
var cors = require("cors");
var whitelist = [
  "http://localhost:3000",
  "http://localhost:3000/login",
  "http://localhost:443",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

/* GET nodes listing. */
router.get("/sentiments", cors(corsOptions), sentimentController.getSentiment);

/* POST nodes listing. */
router.post("/sentiment", sentimentController.addOne);

module.exports = router;
