var express = require('express');
var router = express.Router();
var query = require('../db/query')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/students/:name', function(req, res, next) {
  query.Students().where('name', req.params.name).then(function(data) {
    res.render('student', {
      data: data[0]
    });
  }).catch(function(err) {
    return next(error)
  })
})

module.exports = router;
