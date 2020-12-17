const Book = require('./models/Book');

const parse = (document) => {
    const URL = 'http://books.toscrape.com/';
    
    const titles = document.querySelectorAll('.product_pod h3 a');
    const titlesArray = [...titles].map(title => title.textContent);
    
    const images = document.querySelectorAll('.product_pod img');
    const imagesArray = [...images].map(image => `${URL}${image.src}`);
    
    const ratings = document.querySelectorAll('.product_pod .star-rating');
    const classListArray = [...ratings].map(rating => rating.classList);
    const ratingsArray = [...classListArray].map(classes => classes[1]);

    const prices = document.querySelectorAll('.product_pod .price_color');
    const pricesArray = [...prices].map(price => price.textContent);

    const stocks = document.querySelectorAll('.product_pod .instock');
    const stocksArray = [...stocks].map(stock => stock.textContent.indexOf('In stock') != -1 ? true : false);

    const bookObjects = [];
    for( let i = 0; i < titles.length; i++ ) {
        const newObj = {};
        newObj.title = titlesArray[i];
        newObj.coverImage = imagesArray[i];
        newObj.rating = ratingsArray[i];
        newObj.price = pricesArray[i];
        newObj.inStock = stocksArray[i];
        bookObjects.push(newObj);
    }
    return document;
}

module.exports = parse;
