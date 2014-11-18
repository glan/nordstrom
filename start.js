'use strict';

var fork = require('child_process').fork;

// Start product API service (on port 3001)
fork('./server', {
    cwd: './productService'
});

// Start web client (on port 3000)
fork('./server', {
    cwd: './webClient'
});
