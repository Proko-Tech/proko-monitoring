async function handleRequest(request, response) {
    // url: /service/server/stats
    if (request.method === 'POST' && request.url.split('/')[3] === 'stats') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('end');
    } else {
        response.writeHead(400, {'Content-Type': 'text/plain'});
        response.end('end');
    }
}

module.exports = {handleRequest}