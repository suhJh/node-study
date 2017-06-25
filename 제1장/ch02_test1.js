let result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {
    result += i;
}


console.timeEnd('duration_sum');
console.log('the result is %d', result);

console.log('현재 실행한 파일의 이름: %s', __filename);
console.log('현재 실행한 파일의 패쓰: %s', __dirname);


let Person = { name: '소녀시대', age: 20 };

//  객체의 속성을 확인할 때 사용한다.
console.dir(Person);


console.log('속성의 파라미터 수 : ' + process.argv.length);
console.log(process.argv);


console.log('================================================');


process.argv.forEach((item, idx) => console.log(idx + ': ' + item) );


console.log('================================================');


console.dir(process.env)
console.log(process.env[OS]);