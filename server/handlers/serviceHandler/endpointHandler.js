async function handleRequest(request, response) {
    // url: /service/endpoint/call
    if (request.method === 'POST' && request.url.split('/')[3] === 'call') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('end');
    } else {
        response.writeHead(400, {'Content-Type': 'text/plain'});
        response.end('end');
    }
}

module.exports = {handleRequest}