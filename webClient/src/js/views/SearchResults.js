'use strict';

var searchResultsTemplate = require('../../templates/searchResults.hbs');

/**
 * Construct Search View
 */
function SearchView($el, products) {
    this.$el = $el;
    this.products = products;
}

var proto = SearchView.prototype;

/**
 * Render Search View
 */
proto.render = function render() {
    this.$el.html(searchResultsTemplate(this.products.toJSON()));
};

module.exports = SearchView;
