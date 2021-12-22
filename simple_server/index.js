const http = require('http');
const server = http.createServer(
    onRequest = (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('Hello Harry the Werewolf');
        response.end();
    }
).listen(3000);