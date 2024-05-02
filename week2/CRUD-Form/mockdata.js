import casual from 'casual';

// Create an object for config file
var db = { persons: [] };

for (var i = 1; i <= 5; i++) {
  var person = {};
  person.id = i;

  person.name = casual.first_name;

  person.age = casual.integer(15, 100)
  person.gender = casual.integer(0,1) === 0 ? 'female' : 'male'

  person.email = person.name.toLowerCase() + "@test.com"

  db.persons.push(person);
}
console.log(JSON.stringify(db));
