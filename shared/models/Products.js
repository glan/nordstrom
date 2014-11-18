'use strict';

var Collection = require('backbone').Collection;

/**
 * Backbone collection for representing products.
 * Shared beween products service and web client javascript
 */
function Products(tag) {
    Collection.apply(this, arguments);
}

var proto = Products.prototype = Object.create(Collection.prototype);

module.exports = proto.constructor = Products;
