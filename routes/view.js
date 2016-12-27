var express = require('express');
var router = express.Router();
var query = require('../db/query');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


/* GET home page. */
router.get('/', function(req, res, next) {
  var before = "password";
  var hash = bcrypt.hashSync(before, salt);
  console.log(bcrypt.compareSync("password", hash));
  console.log(hash);
  console.log(salt);
  console.log("hello")
  res.render('index');
});

router.get('/students/:name', function(req, res, next) {
  query.Students()
    .join('houses', 'students.house_id', 'houses.id')
    .select('students.name as student_name', 'year', 'patronus', 'houses.name as house_name', 'houses.description as house_description')
    .where('students.name', req.params.name)
    .then(function(data) {
      console.log(data);
    res.render('student', {
      data: data[0]
    });
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/houses/:name', function(req, res, next) {
  console.log(__dirname)
  query.Houses()
  .join('professors', 'houses.house_head_id', 'professors.id')
  .select('houses.name as name', 'houses.description as description', 'houses.location as location', 'houses.mascot as mascot', 'houses.colours as colours', 'professors.name as head')
  .where('houses.name', req.params.name)
  .then(function(data) {
    let colors = [];
    let temparr = data[0].colours.split(" and ");
    for (let c of temparr) {
      colors.push(c);
    }
    res.render('house', {
      data: data[0],
      color1: colors[0],
      color2: colors[1]
    });
  }).catch(function(err) {
    return next(error)
  })
})

module.exports = router;
