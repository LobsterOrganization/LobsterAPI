var express = require('express');
var router = express.Router();

var nodeController = require("../controllers/node/node.controller");

/* GET nodes listing. */
router.get("/nodes", nodeController.getNodes);

/* POST nodes listing. */
router.post("/node", nodeController.addOne);

module.exports = router;

