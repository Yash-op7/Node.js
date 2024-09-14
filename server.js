import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>home page</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>not home page</h1>');
            }
        } else {
            // res.write('not get request\n');
            throw new Error('method not allowed');
        }
    } catch (error) {
        console.log("ERROR is", error);
    }
})

server.listen(PORT, () => {
    console.log(`Server, running on ${PORT}`)
})