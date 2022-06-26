"use strict";
function main(lines) { // lines: Array<string>
  /**
   * このコードは標準入力と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use stdin and stdout.
   * You can edit and even remove this code as you like.
  */
  const inputData = lines.filter( l => {
    return (l !== "\n" && l !== "")
    })[0]
  const spaceSplitData = inputData.split(" ")
  const number = parseInt(spaceSplitData[spaceSplitData.length-1])
  if (number === 0) {
    console.log(0)
  }
  const keyAndNumbers = spaceSplitData.splice(0, spaceSplitData.length-1)
  const arrayKeyAndNumbers = keyAndNumbers.map(d => {
    const splitData = d.split(":")
    return [parseInt(splitData[0]), splitData[1]]
  })
  arrayKeyAndNumbers.sort((before, after) => {
    return before[0] - after[0]
  })
  
  let result = ""
  arrayKeyAndNumbers.map(d => {
    if (number % d[0] === 0) {
      result = result + d[1]
    }
  })
  if (result === "") result = number
  console.log(result)
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
