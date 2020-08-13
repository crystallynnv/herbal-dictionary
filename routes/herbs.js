const express = require("express");
const router = express.Router();
const herbsCtrl = require("../controllers/herbs");

router.get('/herbs', isLoggedIn, herbsCtrl.index);
router.get('/herbs/new', isLoggedIn, herbsCtrl.new);
router.post('/herbs', isLoggedIn, herbsCtrl.create);
router.get('/herbs/:id', isLoggedIn, herbsCtrl.show);
router.get('/herbs/:id/edit', isLoggedIn, herbsCtrl.edit);
router.put('/herbs/update/:id', isLoggedIn, herbsCtrl.update);
router.delete('/herbs/:id', isLoggedIn, herbsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;