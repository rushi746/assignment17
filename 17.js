const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    let responseText = '';

    if (url === '/home') {
        responseText = 'Welcome home';
    } else if (url === '/about') {
        responseText = 'Welcome to About Us page';
    } else if (url === '/node') {
        responseText = 'Welcome to my Node Js project';
    } else {
        responseText = '404 - Not Found';
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(responseText);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
