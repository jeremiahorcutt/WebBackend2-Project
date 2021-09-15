const http = require('http');
const { runInNewContext } = require('vm');
const { brotliDecompress } = require('zlib');
const routes = require('./prove01-routes');

const server = http.createServer(routes);

server.listen(3000);