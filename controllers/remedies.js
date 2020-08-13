const Remedy = require("../models/remedy");
const Herb = require('../models/herb');
const User = require('../models/user');

module.exports = {
  new: newRemedy,
  create
};

function create(req, res) {
    console.log(req.body);
    User.findById(req.user._id, function(err, user) {
        let herbi = user.herbs.id(req.params.id);
        herbi.remedies.push(req.body);
            user.save(function(err) {
            res.redirect(`/herbs/${req.params.id}`)
        })
        })
}

function newRemedy(req, res) {
    res.render('remedy/new', {id: req.params.id, user: req.user})
}
