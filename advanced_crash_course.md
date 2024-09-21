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
```js
function* plus21 (s=3, e=99, step=21) {
    for(let i=s;i<=e;i+=step) yield i;
}

const gen1 = plus21(-21,undefined,20);
for(let x of gen1) console.log(x);
```
- currying
- create a clock app