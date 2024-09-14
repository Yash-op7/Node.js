// make a server that serves an API

import {createServer} from 'http';

const users = [
    {id: 1, name: 'tim'},
    {id: 2, name: 'tib'},
    {id: 3, name: 'bob'},
];

const PORT = 8000;

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        
        res.setHeader('Content-Type', 'application/json');
        // res.end(JSON.stringify(users));

        res.end(JSON.stringify(user??{mssg:"user not found"}));

    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('route not found');
        console.log('what');
    }
});

server.listen(PORT, () => {
    console.log(`server2 running on ${PORT}`);
})