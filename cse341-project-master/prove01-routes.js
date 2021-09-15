const fs = require('fs');


const rqHandler = (req, res) => {  
        const url = req.url;
        if (url === '/') {
         res.setHeader('Content-Type', 'text/html');
         res.write('<html>');
         res.write('<head><title>Problem 1</title></head>');
         res.write('<bodt><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
         res.write('</html>');
         return res.end();
        }
        if (url === '/users'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Problem 1</title></head>');
            res.write('<bodt><ul><li>User1</li><li>User2</li></ul></body>');
            res.write('</html>');
            return res.end();
        }
        if(url === '/create-user') {
            const body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody.split('=')[1]);
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        }
    };

    module.exports = rqHandler;