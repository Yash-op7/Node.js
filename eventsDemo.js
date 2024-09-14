import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler() {
    console.log('Hello world');
}
function goodbyeHandler(name) {
    console.log('goodbye', name);
}

// register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye', 'john');

// error handling
myEmitter.on('error', (err)=>{
    console.log('err occured', err);
})

// simulate error
myEmitter.emit('error', new Error('something went wrong'));