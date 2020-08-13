const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.get('/', usersCtrl.index);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;