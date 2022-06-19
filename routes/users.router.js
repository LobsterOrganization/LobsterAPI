var express = require('express');
var router = express.Router();

// Set Cors
var cors = require("cors");
var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

var userController = require("../controllers/user/user.controller");

/* GET users listing. */
router.get("/users", cors(corsOptions), userController.getUsers);

/* POST users listing. */
router.post("/user", userController.addOne);

module.exports = router;
