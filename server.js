import http from 'http';
import fs from 'fs/promises';

// If using commonJS, you have some variables:
// __filename which will give you the current file's path
// __dirname which will give you the current dir

// these are not available in ES modules, but we can make them

import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);

import path from 'path';
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            }
            else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('route/page not found.');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            // res.write('not get request\n');
            throw new Error(`${req.method} not allowed`);
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        let filePath = path.join(__dirname, 'public', 'fallback.html');
        const data = await fs.readFile(filePath);
        res.end(data);
        console.log("ERROR is", error);
    }
})

server.listen(PORT, () => {
    console.log(`Server, running on ${PORT}`)
})