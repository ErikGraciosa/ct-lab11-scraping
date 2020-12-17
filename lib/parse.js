const parse = (document) => {
    const URL = 'http://books.toscrape.com/';
    //title
    const titles = document.querySelectorAll('.product_pod h3 a');
    const titlesArray = [...titles].map(title => title.textContent);
    //cover_image
    const images = document.querySelectorAll('.product_pod img');
    const imagesArray = [...images].map(image => `${URL}${image.src}`);
    //rating
    const ratings = document.querySelectorAll('.product_pod .star-rating');
    const classListArray = [...ratings].map(rating => rating.classList);
    const ratingsArray = [...classListArray].map(classes => classes[1]);
    //price
    const prices = document.querySelectorAll('.product_pod .price_color');
    const pricesArray = [...prices].map(price => price.textContent);

    //in_stock
    const stocks = document.querySelectorAll('.product_pod .instock');
    const stocksArray = [...stocks].map(stock => stock.textContent.indexOf('In stock') != -1 ? true : false);


    console.log(ratingsArray);
    


    return document;
}

module.exports = parse;
