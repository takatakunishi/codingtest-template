// 追加 ---------------------------------------
let fluit = [ 'りんご', 'みかん', 'ぶどう' ];

// indexの2番目に養素を追加
fluit.splice(2, 0, 'もも');
console.log(fluit);


// 置換 ---------------------------------------
fluit = [ 'りんご', 'みかん', 'ぶどう' ];

// indexの0番目の養素を置換する
fluit.splice(0, 1, 'すいか');
console.log(fluit);


// 削除 ---------------------------------------
fluit = [ 'りんご', 'みかん', 'ぶどう' ];

// indexの0番目の養素を削除する
fluit.splice(1, 1);
console.log(fluit);


// --- 検索 ---

// indexの小さい方から順に要素を検索。条件に該当する要素があれば返す
// 最初に条件に該当した要素のみを返すので、この例では9が返され、8は返されないことに注意
let arr = [1, 9, 5, 2, 8];
let target = arr.find(t => t > 7);
console.log(target);
// >> 9

// 条件に該当する要素が存在しない場合
arr = [1, 3, 5, 2, 6];
target = arr.find(t => t > 7);
console.log(target);
//>> undefined

// 含まれる
arr = ['a', 'b', 'c', 'd']
result = arr.indexOf('c')
console.log(result)
//>> 2

// 含まれない
arr = ['a', 'b', 'c', 'd']
result = arr.indexOf('e')
console.log(result)
//>> -1


// --- 抽出 ---
arr = ['apple', 'dog', 'pen', 'cat', 'dictionary', 'chair'];
newArr = arr.filter(str => str.length < 5);
console.log(newArr);
// >> [ 'dog', 'pen', 'cat' ]

arr = ['apple', 'kitchen', 'flower', 'bicycle', 'dictionary', 'chair'];
newArr = arr.filter(str => str.length < 5);
console.log(newArr);
// >> []


// --- 文字列のソート ---
// アルファベット
arr = [ 'dog', 'apple', 'bottle', 'cat' ]
var sortedArr = arr.sort();
console.log(sortedArr);
// >> [ 'apple', 'bottle', 'cat', 'dog' ]

// ひらがな
arr = [ 'おもち', 'えほん', 'いぬ', 'あめ' ]
var sortedArr = arr.sort();
console.log(sortedArr);
// >> [ 'あめ', 'いぬ', 'えほん', 'おもち' ]

// 数字
arr = ["98","631","0097","81","341"]
var sortedArr = arr.map(number => parseInt(number)).sort((a, b) => a- b);
console.log("sortedArr",sortedArr);
var sortedArr = arr.map(number => parseInt(number)).sort();

arr = "86749809021783"
// char分解
let arrtmp = arr.split("")
arrtmp.sort()
console.log(arrtmp.join(""))
console.log(parseInt(arrtmp.splice(0, 4).join("")))

arr = "5000002d sd"
let reg = /0/g
let count = 0
str = arr.match(reg);
if (arr == null){
  count = 0;
}else{
  count = str.length;
}
console.log("count", str,count)
// char分解
arrtmp = arr.replace(/[^0-9]/g, '').split("")
console.log("check include out of 0:", arrtmp.includes("0"))
arrtmp.sort()
console.log(arrtmp.join(""))
console.log(parseInt(arrtmp.splice((4 > count) ? 0 : count, (4 > count) ? 4 : 1).join("")))


// 配列を学順にする
arr = ['a', 'b', 'c', 'd']
console.log("reverse", arr.reverse())