console.log(process); 
console.log(process.argv[3]);
console.log(process.env);
console.log(process.env.LOGNAME);
console.log(process.pid);
console.log(process.cwd()); // current working directory
console.log(process.title); // title of the node js process
console.log(process.memoryUsage());
console.log(process.uptime());  // time from when you run the command and this command in the script executing

// setTimeout(() => console.log(process.uptime()), 1000);

// console.log(process.exit(0));   // exit the code execution, 0 -> success, 1 or any other -> error code
// console.log('hello from after exit');

// also we register call to exit() as an event
process.on('exit', (code) => {
    console.log(`going to exit with the code: ${code}`);
})
console.log(process.exit(0));

