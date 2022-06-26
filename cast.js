// 数値→文字列
var num = 123;
var numToStr = String(num);

console.log(typeof(num));       // 変換前の型
console.log(typeof(numToStr));  // 変換後の型
//>> number
//>> string

// 文字列→数値
var str = '123';
var strToNum = Number(str);

console.log(typeof(str));       // 変換前の型
console.log(typeof(strToNum));  // 変換後の型
//>> string
//>> number