const data = `pineapple,160
apple,80
watermelon,160
grape,160
melon,80
mango,170
banana,80
strawberry,170
peach,160
orange,170
kiwi,80
`

const row = data.split("\n").filter(rowData => !(rowData ===""))
console.log(row)

const price = row.map(r => {
  return r.split(",")
})
console.log(price)

const result = price.sort((before, after) => {
  console.log(before[1], after[1], parseInt(before[1]) > parseInt(after[1]))
  return parseInt(before[1]) - parseInt(after[1])
})

console.log(result)

const typeCheck = (data) => {
  return typeof(data)
}

console.log(typeCheck("gjsga"), typeCheck(false), typeCheck(0), typeCheck("0"))