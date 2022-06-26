const number =87354130

const constraint = [3, 5, 7]
const say = ["fizz", "buzz", "hoge"]
const fizzBuzz = (num) => {
  if (num === 0) {
    console.log("no fizz buzz")
    return
  }
  let multiple = constraint[0]
  for (i = 1; i < constraint.length; i++){
    multiple = multiple*constraint[i]
  }
  if (num % multiple === 0) {
    console.log("perfect", multiple)
    return
  }
  console.log("multiple",multiple)
  const sayPosition = []
  const check = constraint.map((c, index) => {
    const isMultipule = ((num % c) === 0)
    if (isMultipule) sayPosition.push(index)
    return ((num % c) === 0)
  })
  console.log(check.includes(false))
  if (sayPosition.length > 0) {
    console.log(sayPosition.length, sayPosition)
    console.log(sayPosition.map(position => {
      return say[position]
    }))
  } else {
    console.log("no fizzbuzz")
  }
}
fizzBuzz(number)


