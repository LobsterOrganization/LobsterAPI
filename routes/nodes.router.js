var express = require('express');
var router = express.Router();

var nodeController = require("../controllers/node/node.controller");

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


/* GET nodes listing. */
router.get("/nodes", cors(corsOptions), nodeController.getNodes);

/* POST nodes listing. */
router.post("/node", nodeController.addOne);

module.exports = router;

