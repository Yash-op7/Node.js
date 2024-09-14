// make a server that serves an API

import {createServer} from 'http';

const users = [
    {id: 1, name: 'tim'},
    {id: 2, name: 'tib'},
    {id: 3, name: 'bob'},
]

const PORT = process.env.PORT;

const server = createServer((req, res) => {
    if (req.url === 'api/users' && req.method === 'GET') {
        res.setHeader()
    }
});

server.listen(PORT, () => {
    console.log(`server2 running on ${PORT}`);
})