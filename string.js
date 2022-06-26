// カンマで分割する
var str = "abc,def,ghi,jkl"
var arr = str.split(",");
console.log(arr);
//>> [ 'abc', 'def', 'ghi', 'jkl' ]

// スペースで分割する
var str = "abc def ghi jkl"
var arr = str.split(" ");
console.log(arr);
//>> [ 'abc', 'def', 'ghi', 'jkl' ]

// １文字ずつ分割する
var str = "abcdefghijkl"
var arr = str.split("");
console.log(arr);
//>> [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]