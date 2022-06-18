const User = require("../../models/user.model");
const config = require("config");

var userController = {
  /**
   * Get all users
   */
  getUsers: async (req, res, next) => {
    try {
      let users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  addOne: async (req, res, next) => {
    try {
      let user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.err(err);
      next(err);
    }
  },
};

module.exports = userController;
