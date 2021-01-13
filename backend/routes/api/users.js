const mongoose = require("mongoose");
const router = require("express").Router();
const passport = require("passport");
const validator = require("validator");
const auth = require("../../middleware/auth");
const User = mongoose.model("User");

/**
 * POST /users/signup
 * Create a new local account.
 */
router.post("/users/signup", (req, res, next) => {
  const errors = {};

  if (!validator.isEmail(req.body.user.email)) {
    errors.email = "enter a valid email address.";
  }

  if (!validator.isLength(req.body.user.password, { min: 8 })) {
    errors.password = "password must be at least 8 characters long.";
  }

  if (req.body.user.password !== req.body.user.confirmPassword) {
    errors.confirmPassword = "passwords do not match.";
  }

  if (Object.keys(errors).length) {
    return res.json({ errors });
  }
  const user = new User({
    username: req.body.user.username,
    email: req.body.user.email,
    password: req.body.user.password,
  });

  user
    .save()
    .then(() => {
      return res.json({ user: user.toAuthJSON() });
    })
    .catch(next);
});

/**
 * POST /users/login
 * Sign in using email and password.
 */
router.post("/users/login", (req, res, next) => {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "email can't be blank." } });
  }

  if (!req.body.user.password) {
    return res
      .status(422)
      .json({ errors: { password: "password can't be blank." } });
  }

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

/**
 * GET /account
 * Profile page.
 */

router.get("/users/account", auth.required, (req, res, next) => {
  User.deleteOne({ _id: req.payload.id })
    .then((user) => {
      if (!user) {
        return res.sendStatus(401);
      }

      return res.json({ account: user.toAuthJSON() });
    })
    .catch(next);
});

/**
 * POST /account/profile
 * Update profile information.
 */

/**
 * POST /account/password
 * Update current password.
 */

/**
 * POST /users/account/delete
 * Delete user account.
 */
router.post("/users/account/delete", auth.required, (req, res, next) => {
  User.deleteOne({ _id: req.payload.id })
    .then((user) => {
      return res.status(200).json({
        success: {
          message: "your account has been deleted.",
          user: user.toAuthJSON(),
        },
      });
    })
    .catch(next);
});

module.exports = router;
