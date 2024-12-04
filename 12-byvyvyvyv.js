const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
    res.end('WELCOME TO OUR HOME PAGE, DANCIL!')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`<h1>Oppsss</h1>
        ,<p>We cant seem find </p>
        <a href="/">back HOME</a>
        `)



})
server.listen(5000)