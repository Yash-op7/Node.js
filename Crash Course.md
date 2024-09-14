> ## General Goals
### Modules
### Event Loop
### Asynchronous Programming

# Node.js YT Course:
<!-- https://www.youtube.com/watch?v=32M1al-Y6Ag&t=0s -->

- What is node.js, how does it work
- installation, setup, package.json, npm
- custom modules, CommonJS, ES Modules
- HTTP module, req/res, routing, serving JSON/HTML
- custom middleware

# What is node.js and how it works:
![alt text](image.png)
- a js runtime, its a program that runs other programs
- nodejs is fast and scalable
- Node runs on the V8 js engine (which is same as the one in chrome), which is implemented in c++
- Non-blocking: doesn't wait around for completion of I/O ops(network calls, file system ops, db ops), and instead of blockign the exec of code while waiting for these thigns to complete, node uses events and callbacks

- single threaded, uses an event loop which allows it to perform non blocking io ops, when you make a network call, it doesn't wait for it to complete instead it continues to exec the rest of the code and when that req does complete it triggers a callback which is then added to event queue and the event loop picks up the callback and executes it.

## what node is used for
- building APIs
- server-rendered apps
- real time apps like chat, games, collaboration tools
- microservices
- cmd line tools
- bots, twitter bots
- web scraping
- web servers, complex routing, dynamic content

> ❌ Not good for cpu intensisve tasks

## installation and usage
- node js comes with a REPL - read eval print loop, basically command line environment to run node
### new node project
> `npm init` or `npm init -y` to skip questions
