var fs = require('fs');

fs.writeFile('./output.txt', 'Hello world', function (err) {
    if (err) {
        console.log('Err: ' + err);
    }
    
    console.log('파일 쓰기가 완료되었습니다.');
});