var fs = require('fs');

//  w: 쓰기에 사용하는 플래그. 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제
//  r: 읽기에 사용하는 플래그. 파일이 없으면 예외가 발생합니다.
//  w+: 읽기와 쓰기에 모두 사용하는 플래그. 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제
//  a+: 읽기와 추가에 모두 사용하는 플래그. 파일이 없으면 만들어지고 있으면 이전 내용에 새로운 내용을 추가
fs.open('./output.txt', 'w', function (err, fd) {
    if (err) throw err;
    
    
    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
        if (err) throw err;
        
        console.log(err, written, buffer);
        
        fs.close(fd, () => {
           console.log('파일열고 데이터 쓰고 파일 닫기 완료');
        });
        
    });
    
    
});