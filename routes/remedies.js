const express = require("express");
const router = express.Router();
const remedyCtrl = require("../controllers/remedies");


router.get('/herbs/:id/remedies/new', isLoggedIn, remedyCtrl.new);
router.post('/herbs/:id/remedies', isLoggedIn, remedyCtrl.create);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;