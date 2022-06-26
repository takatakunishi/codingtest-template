// 数値以外をフィルタ
let arr = "d5g020d sd7"
arrtmp = arr.replace(/[^0-9]/g, '')
console.log(arrtmp)

// 特定の文字数をカウント
str = "d5g020d sd7"
let reg = /0/g
let count = 0
arr = str.match(reg);
if (arr == null){
  count = 0;
}else{
  count = arr.length;
}
console.log(arr);
console.log(count);

//--- 検索 ---
// 含まれる場合
let text = 'Imagine all the people living for today';
let target = /people/g;
let result = text.match(target);
console.log(result);
// >> [ 'peole' ]

// 含まれない場合
text = 'Imagine all the people living for today';
target = /dreamer/g;
result = text.match(target);
console.log(result);
//>> null


// 特定の文字列を削除
// ”みかん”を”もも”に置換
str = "りんごみかんぶどう";
let strNew = str.replace( /みかん/g , "もも" );
console.log(strNew);
//>> りんごももぶどう

// ”みかん”を削除
str = "りんごみかんぶどう" ;
strNew = str.replace( /みかん/g , "" ) ;
console.log(strNew);
//>> りんごぶどう


// 指定範囲の文字列を取得
str = "あいうえおかきくけこ";

// indexの0番目から2番目までの文字を取得　
// indexの開始位置(0)と終了位置(3)を指定している
// 実際に取得されるのは終了位置の手前まで(0〜2)であることに注意
let a = str.slice( 0, 3 );
console.log(a);
//>> あいう

// indexの3番目から5番目までの文字を取得　
// indexの開始位置(3)と終了位置(6)を指定している
// 実際に取得されるのは終了位置の手前まで(3〜5)であることに注意
let b = str.slice( 3, 6 );
console.log(b);
//>> えおか

// index6番目以降の文字を取得
// indexの終了位置を省略すると末尾までの値を取得する
let c = str.slice( 6 );
console.log(c);
//>> きくけこ

// 末尾から3文字を取得
// 文字列末尾からindexをカウントする場合、
// 最後尾を-1として、先頭に近づくにつれて-2,-3・・・とカウントしていく
let d = str.slice( -3 );
console.log(d);
//>> くけこ