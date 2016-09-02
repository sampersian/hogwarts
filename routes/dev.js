var express = require('express');
var router = express.Router();
var query = require('../db/query');

router.get('/', function(req, res, next) {
  res.render('dev');
})

router.get('/students/new/:name/:house_id/:year/:patronus', function(req, res, next) {
  query.NewStudent(req.params.name, req.params.house_id, req.params.year, req.params.patronus).then(function() {
    res.redirect("/");
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/patronus/update/:name/:patronus', function(req, res, next) {
  query.UpdatePatronus(req.params.name, req.params.patronus).then(function() {
    res.redirect("/");
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/students/delete/:name', function(req, res, next) {
  query.DeleteStudent(req.params.name).then(function() {
    res.redirect("/");
  }).catch(function(err) {
    return next(error)
  })
})

module.exports = router;
