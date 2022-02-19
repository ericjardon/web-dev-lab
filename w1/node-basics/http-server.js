const http = require('http');

const hostname = '127.0.0.1'; // local machine

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('ContentType', 'text/plain');
    res.end('Hola Mundo');
})

server.listen(port, hostname, ()=>console.log(`Server is running in port ${port}`));