# Node.js mastery
## Definition:
> Node.js is an open-source, cross-platform JavaScript runtime environment that runs on Chrome’s V8 JavaScript engine, enabling server-side development.

## Key Pointers:
- Runs on Chrome’s V8 engine and allows server-side JavaScript code execution.
- Node.js applications run in a single process using asynchronous primitives.
- Developed by Ryan Dahl; the latest version is v20.
- Compatible with Windows, Linux, Unix, and macOS.
- Facilitates frontend developers to write server-side code using JavaScript.
- Popular for developing RESTful APIs, microservices, and web applications.
- Allows full-stack development with JavaScript on both front and back ends.
- Event-driven, non-blocking model enhances responsiveness and efficiency.

- Key concepts: modules, event loops, async/await, and error handling.
- Tools and modules: Nodemon, child processes, session variables, and various Node.js modules like HTTP, file system, and crypto.
- Projects include library management systems, chat apps using Socket.io, and task managers.
- Widely used in e-commerce and IoT, with around a million websites using Node.js.
- Ideal for real-time web apps, microservices, and efficient data streaming.

- `node -v` & `npm -v`

# Promises
## 1. `Promise` constructor
```js
const 
```

# Important Points:
- this syntax:
```js
console.log((y => y + 10)(10));
const calculate=(x, y) => x+y;
console.log((y => y + 10)(calculate(1, 2)));
```
- `setTimeout(callback, delay, ...argsToTheCallback);`
- Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
```js
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
- while function invokation to default some value while not defaulting others, pass it as `undefined`
## generators:
- use `function*` instead of `function` and create a normal function with a `yield` keyword as return
- a generator function is an iterable logic which has non-continuos execution
- basically a generator function allows you to create a tool which can generate a single-use portal variable which ressembles a sequence of values which can be fetched one at a time, and be iterated using a `for...of` loop
- The `function*` declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.
- A `function*` declaration creates a `GeneratorFunction` object. Each time a generator function is called, it returns a new `Generator` object, which conforms to the iterator protocol. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from next().


```js
function* plus21 (s=3, e=99, step=21) {
    for(let i=s;i<=e;i+=step) yield i;
}

const gen1 = plus21(-21,undefined,20);
for(let x of gen1) console.log(x);
```

- currying
- create a clock app


# Node.js Streams
Streams is one of the most important and difficult topic in Node.js. It comes into play when you're working with a large amount of data, or performance is your concern
- 4 types of streams:
1. Readable: only read
2. Writable: only write
3. Duplex: read and write both
4. Transform: changes how the data looks or behaves

# Node.js Memory management:
- Memory Leaks:
    - sources
        - not cleared timers or intervals
        - global variables
        - closures
        - unreferenced nodes in the browser
- Specific pattern while analysis which signifies memory leaks:
![alt text](image-7.png)
- never have global variables, they cause mem leaks, the reason is global var are attached to the window or global object, and the garbage collector cannot decide whether they are no longer needed or not because they are stuck to the root, so they are stuck there forever.
- closures with an external variable reference: callbacks are ambiguous when it comes to garbage collecting, the GC is not goign to know whether this callback has finished or not so its not going to remove its reference.
- simply a huge data object in the code, like a huge array, instead use some cache like `node-cache` or `memcached` in node and `sessionstorage` or `localstorage` in the browser
- cyclic references in objects
- remove event emitter listeners in nodejs, to deal with them just remove them and you're good otherwise they get stuck forever. example:
```js
const EventEmitter = require('events');
...
EventEmitter.on('start', callback1);
...
EventEmitter.remove('start');
```
- timers:
![alt text](image-8.png)

- How to see memory leaks via GC, use the `--trace_gc` flag:
`node --trace_gc index.js`
another way is to use:
`node --inspect index.js` -> now we can go to the browser and write chrome://inspect

also use: `npx pm2 start index.js`, this will start the process in the background and tell you the cpu and memory usage and you can do:
`npx pm2 logs` you can inspect logs, &
`npx pm2 monit` for live monitoring
`npx pm2 status`
- pm2 is a very cool tool that you can use in production for example on docker images.

- `npx pm2 stop index.js`