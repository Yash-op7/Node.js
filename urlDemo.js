import url, { fileURLToPath } from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// url obj, see URLSearchParams to work with url objects
const  urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.pathname);

// url .format()
// takes the object and turns it back into a string
console.log(url.format(urlObj));

// import.meta.url - gives the current file url (with the protocol like file://)
console.log(import.meta.url);

// fileURLToPath - converts into a regular path
console.log(fileURLToPath(import.meta.url));
