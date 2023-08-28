const endpointHandler = require('./endpointHandler');
const serverHandler = require('./serverHandler');

async function handleRequest(request, response) {
    // url: /service
    if (request.method === 'POST' && request.url === '/service') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('end');
    } else if (request.method === 'POST' && request.url.split('/')[2] === 'endpoint') {
        await endpointHandler.handleRequest(request, response);
    } else if (request.method === 'POST' && request.url.split('/')[2] === 'server') {
        await serverHandler.handleRequest(request, response);
    }else {
        response.writeHead(400, {'Content-Type': 'text/plain'});
        response.end('end');
    }
}

module.exports = {handleRequest};