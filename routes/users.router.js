var express = require('express');
var router = express.Router();

var userController = require("../controllers/user/user.controller");

/* GET users listing. */
router.get("/users", userController.getUsers);

/* POST users listing. */
router.post("/user", userController.addOne);

module.exports = router;
