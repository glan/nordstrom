'use strict';

var express = require('express'),
    Products = require('../shared/models/Products'),
    app = express();

// Enabling CORS so that our client can request content
// http://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// get full list of products
app.get('/products', function (req, res) {
    var products = new Products(require('./data/products'));
    res.json(products);
});

// get products group by brand
app.get('/brands', function (req, res) {
    var products = new Products(require('./data/products')),
        brands = products.groupBy(function (product) {
            return product.get('brand');
        });
    res.json(brands);
});

// start product service on port 3001
var server = app.listen(3001, function () {

    var host = server.address().address,
        port = server.address().port;

    console.log('Product server running at http://%s:%s', host, port);

});
