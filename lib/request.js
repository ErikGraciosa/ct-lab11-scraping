const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async() => {
    const { window: {document} } = await fetch('http://books.toscrape.com/')
        .then(webpage => webpage.text())
        .then(html => new JSDOM(html))

    console.log(document)
    return document;
}

module.exports = {
    request
}
