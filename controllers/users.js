function index(req, res) {
    User.find({}, function(err, users) {
      if (err) return next(err);
      res.render("users/index", { 
        users,
        user: req.user,
      });
    });
  }