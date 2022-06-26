"use strict";
function main(lines) { // lines: Array<string>
  /**
   * このコードは標準入力と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use stdin and stdout.
   * You can edit and even remove this code as you like.
  */
  const data = lines.filter( l => {
    return (l !== "\n" && l !== "")
    })[0]
  if (parseInt(data) === 0) {
    console.log(0)
    return
  }
  let splitData = data.split("")
  splitData.sort()
  if (splitData[0] === "0"){
    for (let i = 1; i < 10; i++){
      const index = splitData.indexOf(`${i}`)
      if (index === -1) continue;
      const changeData = splitData[index]
      if (index !== -1) {
        splitData.splice(index, 1, "0")
        splitData.splice(0, 1, changeData)
      }
      break;
    }
  }
  console.log(splitData.join(""))
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", v => {
    input += v;
  });
  process.stdin.on("end", () => {
    main(input.split("\n"));
  });
}
runWithStdin();
