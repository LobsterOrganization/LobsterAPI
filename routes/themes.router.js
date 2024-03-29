var express = require("express");
var router = express.Router();

var themeController = require("../controllers/theme/theme.controller");

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
router.get("/themes", cors(corsOptions), themeController.getTheme);

/* POST nodes listing. */
router.post("/theme", themeController.addOne);

module.exports = router;
