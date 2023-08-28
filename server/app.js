const http = require('http');
const server = http.createServer();

const serviceHandler = require('./handlers/serviceHandler/index')

/**
 * Server listener that handles all requests.
 */
server.on('request', async (request, response) => {
  if (request.method === 'POST' && request.url.split('/')[1] === 'service') {
    await serviceHandler.handleRequest(request, response);
  } else {
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.end('end');
  }
});

const port = 3000;
server.listen(port);
console.log(`Listening at ${port}`);

module.exports = server;