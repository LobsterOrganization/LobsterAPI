var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');

const passport = require('passport');

require('../middlewares/passport');

router.post('/register/', controller.registration);
router.post('/login/', controller.login);

module.exports = router;

