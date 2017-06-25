var os = require('os');

console.log('================================================');
console.log(os.hostname());
console.log('================================================');
console.log(os.freemem(), os.totalmem());
console.log('================================================');
console.dir(os.cpus());
console.log('================================================');
console.log(os.networkInterfaces());

