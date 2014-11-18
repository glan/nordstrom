'use strict';

var $ = require('jquery');

/**
 * Simple Router
 */
function Router() {
    this.routes = [];
    // listen for hashchange events
    $(window).on('hashchange', this.execute.bind(this));
}

var proto = Router.prototype;

/**
 * Add route to router
 * @param {string} expression regexp string
 * @param {function} callback function to be execute when location.hash matches expression
 */
proto.addRoute = function addRoute(expression, callback) {
    this.routes.push({
        'expression': expression,
        'callback': callback
    });
};

/**
 * Evaluate location.hash against each route in sequence,
 * executes callback of first matching route.
 */
proto.execute = function execute() {
    var done = false;
    // evaluate each route
    this.routes.forEach(function (route) {
        if (done) {
            return;
        }
        var regexp = new RegExp(route.expression),
            match = regexp.exec(location.hash);
        if (match && match.length) {
            done = true;
            route.callback.apply(null, match);
        }
    });
};

module.exports = Router;
