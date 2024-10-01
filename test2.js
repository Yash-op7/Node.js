import {readFile} from 'fs/promises';

readFile('./text.txt', 'utf-8').then(
    (d) => console.log(d)
).catch(
    (err)=>console.error(err)
);

let json = {
    "a":{
        "b":{
            "c":1
        }
    }
};