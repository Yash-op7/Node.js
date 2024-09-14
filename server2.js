// make a server that serves an API

import {createServer} from 'http';

const users = [
    {id: 1, name: 'tim'},
    {id: 2, name: 'tib'},
    {id: 3, name: 'bob'},
];

const PORT = 8000;

// logger middleware
const logger = (req, res, next) => {
    console.log(`Logger: ${req.method} at ${req.url}`);
    next();
}
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.end(JSON.stringify(users));
}
// route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    res.end(JSON.stringify(user??{mssg:"user not found"}));
}

// create new user route handler, POST /api/users
const createUserHandler = (req, res) => {
    let body = '';

    // listen for the data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);   // converts json into a regular js object
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser))  // convert js obj to json
        res.end();
    })
}

// route not found handler
const notFoundHandler = (req, res) => {
    res.statusCode=404;
    res.end(JSON.stringify({msg:'route not found.'}));
}
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET') {
                getUserByIdHandler(req, res);
            } else if(req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        })
    })
    
});

server.listen(PORT, () => {
    console.log(`server2 running on ${PORT}`);
})