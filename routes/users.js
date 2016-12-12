var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  console.log("login");
  var login = req.param.login;
  var password = req.param.password;

  res.session.login = login;
  res.send("lol");
});

router.post('/logout', function(req, res, next) {
  console.log("logout");
  res.session.clear();
  res.redirect('/');
});

module.exports = router;
