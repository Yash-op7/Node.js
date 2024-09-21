const p = new Promise((res, rej) => {
    setTimeout(() => {
        let x = Math.random();
        if(x > 0.5) res(x);
        rej(x);
    }, 1000);
});

p.then(x => console.log(`success, ${x}`)).catch(y => console.log(`failure, ${y}`));