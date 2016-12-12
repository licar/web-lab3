var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  var login = req.param('login');
  var password = req.param('password');

  if (login == undefined || password == undefined){
    next();
  }
  res.session.auth = login;
  res.redirect('/chat');
});

/* GET users listing. */
router.post('/login', function(req, res, next) {
  res.send("lol");
});

router.post('/logout', function(req, res, next) {
  console.log("logout");
  res.session.clear();
  res.redirect('/');
});

module.exports = router;
