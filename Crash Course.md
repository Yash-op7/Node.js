<!-- https://www.youtube.com/watch?v=32M1al-Y6Ag&t=0s -->

- What is node.js, how does it work
- installation, setup, package.json, npm
- custom modules, CommonJS, ES Modules
- HTTP module, req/res, routing, serving JSON/HTML
- custom middleware

# What is node.js and how it works:
![alt text](image.png)
- None runs on the V8 js engine (which is same as the one in chrome), which is implemented in c++
- Non-blocking: doesn't wait around for completion of I/O ops(network calls, file system ops, db ops), and instead of blockign the exec of code while waiting for these thigns to complete, node uses events and callbacks

