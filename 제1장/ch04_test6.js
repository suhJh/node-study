var fs = require('fs');

fs.readFile('./package.json', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('비동기라고 한다면 이거가 파일보다 먼저 나올 것이다.');