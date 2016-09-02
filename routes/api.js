var express = require('express');
var router = express.Router();
var query = require('../db/query');

router.get('/', function(req, res, next) {
  res.render('api');
})

router.get('/houses', function(req, res, next) {
  query.Houses().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
});

router.get('/students', function(req, res, next) {
  query.Students().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/students/:name', function(req, res, next) {
  query.Students().where('name', req.params.name).then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/classes', function(req, res, next) {
  query.Classes().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/professors', function(req, res, next) {
  query.Professors().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/subjects', function(req, res, next) {
  query.Subjects().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/parents', function(req, res, next) {
  query.Parents().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/parents_students', function(req, res, next) {
  query.ParentsStudents().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/enrollments', function(req, res, next) {
  query.Enrollments().then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

module.exports = router;
