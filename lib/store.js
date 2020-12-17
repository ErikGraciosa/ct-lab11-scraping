require('dotenv').config();
const Book = require('./models/Book');
const fs = require('fs');
const pool = require('../lib/utils/pool');



const storeBooks = async(books) => { 
    pool.query(fs.readFileSync('./data/setup.sql', 'utf-8'));
    await Promise.all(books.map(book => Book.insert(book)));
    pool.end();
    return books;
}


module.exports = storeBooks;
