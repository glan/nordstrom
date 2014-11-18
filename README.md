# Nordstrom Personalization project

Example product search and detail pages.

**Features:**

- Node.js products service (running on port 3001).
- Node.js client webserver (running on port 3000).
- Single page web application with hash nav support.
- Gulp build system for running jshint, browserify and less tasks.

## Prerequisites

Node.js 0.10.3 or newer. This can be downloaded from http://nodejs.org/download/.

## Installation

```bash
git clone https://github.com/glan/nordstrom.git
```

## Starting the servers

```bash
cd ./nordstrom
npm start
```

**Visit:** http://localhost:3000/

## Products service

The products service runs on port 3001 and can be started as follows:

```bash
cd ./productService
node server.js
```

### Endpoints

The service provides the following endpoints:

- *GET* **/products** - Returns a JSON array for all the products
- *GET* **/brands* - Returns products grouped by brand (for possible future use)

A `*` CORS header is also added to responses to allow cross domain access.

## Client website

The web client runs on port 3000 and can be started as follows:

```bash
cd ./webClient
node server.js
```

### Building Javascript and CSS assets

These assets can be built from source using the `gulp` build too.

```bash
cd ./webClient
gulp
```

## Notes

**Tested in:**

- Safari 8
- Firefox 31
- Chrome Canary
