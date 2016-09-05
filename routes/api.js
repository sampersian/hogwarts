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
  query.Students()
  .join('houses', 'houses.id', 'students.house_id')
  .select('students.id as id', 'students.name as name', 'houses.name as house_name', 'year', 'patronus')
  .where('students.name', req.params.name)
  .then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/students/:name/parents', function(req, res, next) {
  query.Students()
    .join('parents_students', 'students.id', 'parents_students.student_id')
    .join('parents', 'parents_students.parent_id', 'parents.id')
    .select('students.name as student_name', 'house_id', 'year', 'patronus', 'parents_students.parent_id', 'parents.name as parent_name')
  .where('students.name', req.params.name)
  .then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
});

router.get('/students/:name/classes', function(req, res, next) {
  query.Students()
    .join('enrollments', 'students.id', 'enrollments.student_id')
    .join('classes', 'classes.id', 'enrollments.class_id')
    .select('students.name as student_name', 'classes.name as class_name')
  .where('students.name', req.params.name)
  .then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
});

router.get('/classes', function(req, res, next) {
  query.Classes()
  .join('subjects', 'classes.subject_id', 'subjects.id')
  .join('professors', 'classes.professor_id', 'professors.id')
  .select('classes.id as id', 'classes.name as class_name', 'subjects.name as subject_name', 'professors.name as professor_name')
  .then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/classes/all', function(req, res, next) {
  query.Classes()
  .then(function(data) {
    res.send(data);
  }).catch(function(err) {
    return next(error)
  })
})

router.get('/classes/:professor', function(req, res, next) {
  query.Classes()
  .join('professors', 'classes.professor_id', 'professors.id')
  .select('classes.name as class_name', 'professors.name as professor_name')
  .where('professors.name', req.params.professor)
  .then(function(data) {
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
