const request  = require('./request');
const parse = require('./parse');


request()
    .then(document => parse(document))
    .then(product => console.log(product));
