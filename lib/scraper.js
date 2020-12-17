const request  = require('./request');
const parse = require('./parse');
const store = require('./store');


request()
    .then(DOM => parse(DOM))
    .then(books => store(books))
    .then(books => console.log(`${books.length} books have been stored to database.`))
    .catch('Error has occured, promise rejected');
