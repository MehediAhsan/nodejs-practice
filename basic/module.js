const os = require('node:os'); 

// console.log(os.cpus())

const EventEmitter = require('node:events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

setTimeout(() => {    
    myEmitter.emit('event');
}, 2000);
