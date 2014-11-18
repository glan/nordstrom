'use strict';

// Require dependencies
var Backbone = require('backbone'),
    $ = Backbone.$ = require('jquery'),
    Products = require('../../../shared/models/Products'),
    ProductView = require('./views/ProductDetails'),
    SearchView = require('./views/SearchResults'),
    Router = require('./Router');

// Create instances
var products = new Products(),
    productView = new ProductView($('.content'), products),
    searchView = new SearchView($('.content'), products),
    router = new Router();

// Setup products API location
products.url = 'http://' + window.location.hostname + ':3001/products';

// Add routes
router.addRoute('#/product/(\\d+)', function (path, styleId) {
    productView.render(styleId);
});

router.addRoute('', function () {
    searchView.render();
});

// Add event handlers
products.on('sync', router.execute.bind(router));

// Start by fetching products
products.fetch();
