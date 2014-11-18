'use strict';

var express = require('express'),
    app = express();

// host static assets from public directory
app.use(express.static('./public'));

// start web client on port 3000
var server = app.listen(3000, function () {

    var host = server.address().address,
        port = server.address().port;

    console.log('Client website running at http://%s:%s', host, port);

});
