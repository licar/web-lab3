var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    /*if (!req.session.login){

    }*/
    res.redirect('/');
});

router.post('/list-users', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/messages', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/add-message', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;