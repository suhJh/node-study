let url = require('url');   //  node기본 모듈임

var curUrl = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&wherem&m=mtp_hty');

var curStr = url.format(curUrl);

console.log(curStr);
console.log(curUrl);



let querystring = require('querystring');

var param = querystring.parse(curUrl.query);


console.log(param.query);
console.log(querystring.stringify(param));
