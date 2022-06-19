const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const { hashSync, compareSync } = require("bcrypt");
const config = require("config");
const privateKey = config.get("privateKey");

var controller = {
  getAll: async (req, res, next) => {
    try {
      let users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  registration: async (req, res, next) => {
    try {
      const { userFirstName, userLastName, userEmail, userPassword } = req.body;

      if (userFirstName.length < 2 || userLastName.length < 2) {
        res.status(409).send("userLastName ou userFirstName invalid");
      } else if (userPassword.length < 8) {
        res.status(409).send("Password must be at least 8 characters");
      } else {
        const users = await User.find({});
        User.findOne({ userEmail: userEmail }).then((user) => {
          if (!user) {
            let user = User.create({
              userFirstName: userFirstName,
              userLastName: userLastName,
              userEmail: userEmail,
              userPassword: hashSync(userPassword, 10),
            });
            const payload = {
              userEmail: userEmail,
              id: user._id,
            };
            const token = jwt.sign(payload, privateKey, { expiresIn: "1d" });
            res.json(token);
          } else {
            res.status(409).send("userEmail already exists");
          }
        });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      User.findOne({ userEmail: req.body.userEmail }).then((user) => {
        if (!user) {
          res.status(401).send("Login incorrect");
        }
        if (!compareSync(req.body.userPassword, user.userPassword)) {
          res.status(401).send("Login incorrects");
        }

        const payload = {
          userEmail: user.userEmail,
          userLastName: user.userLastName,
        };

        const token = jwt.sign(payload, privateKey, { expiresIn: "1d" });

        res.send(token);
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

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

module.exports = controller;
