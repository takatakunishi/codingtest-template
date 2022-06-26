const main = () => {
  const result = fib()
  console.log(result)
}

const fib = () => {
  console.log("call")
  let result = ""
  let fibNum = [1, 1]
  const tryNum = 10
  console.log()
  for (i = 2; i < tryNum; i++){
    fibNum[i] = fibNum[i -1] + fibNum[i-2]
  }
  result = fibNum.join("")
  console.log("fibNum", fibNum)
  return result
}

main()