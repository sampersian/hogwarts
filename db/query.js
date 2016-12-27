var knex = require('./knex');

function Houses() {
  return knex('houses');
}

function Students() {
  return knex('students');
}

function Classes() {
  return knex('classes');
}

function Professors() {
  return knex('professors');
}

function Subjects() {
  return knex('subjects');
}

function Parents() {
  return knex('parents');
}

function ParentsStudents() {
  return knex('parents_students');
}

function Enrollments() {
  return knex('enrollments');
}

function NewStudent(name, house_id, year, patronus) {
  return knex('students').insert({
    name: name,
    house_id: house_id,
    year: year,
    patronus: patronus
  })
}

function UpdatePatronus(name, patronus) {
  return knex('students').update({
    patronus: patronus
  }).where('name', name);
}

function DeleteStudent(name) {
  return knex('students').where('name', name).del();
}




module.exports = {
  Houses,
  Students,
  Classes,
  Professors,
  Subjects,
  Parents,
  ParentsStudents,
  Enrollments,
  NewStudent,
  UpdatePatronus,
  DeleteStudent
};
