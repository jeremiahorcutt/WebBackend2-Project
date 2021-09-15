const fs = require('fs');
const { runInNewContext } = require('vm');
const finalUsers = [];

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
            res.write('<bodt><ul>');
            finalUsers.forEach(user => res.write('<li>'+user+'</li>'));
            res.write('</ul></body>');
            res.write('</html>');
            return res.end();
        }
        if(url === '/create-user') {
            const body = [];
            const users = [];
            req.on('data', chunk => {
                body.push(chunk);
                users.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const parsedUsers = Buffer.concat(users).toString();
                refinedUsers = parsedUsers.split('=')[1];
                console.log(parsedBody.split('=')[1]);
                finalUsers.push(refinedUsers);
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        }
    };
    module.exports = rqHandler;