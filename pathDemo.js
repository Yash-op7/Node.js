import path from "path";

const filePath = './dir1/dir2/test.txt';

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
// console.log(path.parse(filePath));

import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
console.log('$',import.meta.url);   // $ file:///Users/yashmeena/Desktop/stuff/git%20repos/Node.js/pathDemo.js
console.log('$',__filename);         // $ /Users/yashmeena/Desktop/stuff/git repos/Node.js/pathDemo.js

const __dirname = path.dirname(__filename);

console.log(__dirname);

// join(), this exists to automatically join the path irrespective of the opertaing sys, because on mac you have users/bob whereas on windows it is users\bob
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve(), same as .join() but it'll be an absolute path
