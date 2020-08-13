const Herb = require("../models/herb");
const User = require('../models/user');
const Remedy = require('../models/remedy');

module.exports = {
  index,
  new: newHerb,
  create,
  delete: deleteOne,
  show,
  edit,
  update
};

function update(req, res) {
  User.findById(req.user._id, function(err, user) {
    var herbi = user.herbs.id(req.params.id);
    herbi.name = req.body.name;
    herbi.benefits = req.body.benefits;
    herbi.uses = req.body.uses;
    user.save( function(err) {
      res.redirect(`/herbs/${req.params.id}`)
    })
    })} 

function edit(req, res) {
  User.findById(req.user._id, function(err, user) {
    var herb = user.herbs.id(req.params.id) 
      res.render('herbs/edit', {
        user: req.user,
        herb
      })
  })
}

function show(req, res) {
  User.findById(req.user._id, function(err, user) {
      var herb = user.herbs.id(req.params.id) 
        res.render('herbs/show', {
          user: req.user,
          herb,
      });
  })
}


function deleteOne(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.herbs.splice(req.params.id, 1);
    user.save(function (err) {
      res.redirect('/herbs')
    })
  })
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.herbs.push(req.body);
    user.save(function(err) {
      res.redirect('/herbs');
    })
  })
}

function newHerb(req, res) {
  res.render('herbs/new', {
    user: req.user
  });
}

function index(req, res) {
  User.findById(req.user._id, function(err, users) {
    if (err) return next(err);
    res.render("herbs/index", { 
      user: req.user,
      users
    });
  });
}
