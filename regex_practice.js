const regex = /(\d+)/;
const result = regex.exec('abc123sad213');  // Returns ['123', '123']
console.log(result);  // Captured group: '123'
