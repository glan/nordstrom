'use strict';

var $ = require('jquery'),
    productDetailTemplate = require('../../templates/productDetail.hbs');

/**
 * Construct Product View
 */
function ProductView($el, products) {
    this.$el = $el;
    this.products = products;
    // add to cart event listener
    this.$el.on('click', '.add-to-cart', this.addToCart);
}

var proto = ProductView.prototype;

/**
 * Render Product View
 */
proto.render = function render(styleId) {
    // find product by styleId
    var product = this.products.where({
        'style_id': styleId
    })[0];
    if (product) {
        this.$el.html(productDetailTemplate(product.toJSON()));
    } else {
        // TODO handle product not found here
        console.log('product ' + styleId + ' not found');
    }
};

/**
 * Add to cart event handler
 * Note: this context is that of the DOM element rather than an instance of ProductView
 */
proto.addToCart = function addToCart() {
    // TODO add item to cart (maybe use localstorage or server session)
    console.log('add item to cart: ' + $(this).data('style-id'));
    return false;
};

module.exports = ProductView;
