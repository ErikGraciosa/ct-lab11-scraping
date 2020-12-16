const parse = (document) => {
    const URL = 'http://books.toscrape.com/';
    //title
    //cover_image
    const images = document.querySelectorAll('.product_pod img')
    const imagesArray = [...images].map(image => `${URL}${image.src}`)
    //rating
    //price
    //in_stock
    
    console.log(imagesArray);
    


    return document;
}

module.exports = parse;
