function fizzBuzz(number) {
  if (number % 15 === 0) {
    return "FizzBuzz"
  } else if (number % 3 === 0) {
    return "Fizz"
  } else if (number % 5 === 0) {
    return "Buzz"
  } else {
    return number
  }
}

const lowerLimit = process.argv.length > 3 ? parseInt(process.argv[2], 10) : 0
const upperLimit =
  process.argv.length > 3
    ? parseInt(process.argv[3], 10)
    : process.argv.length === 3
    ? parseInt(process.argv[2], 10)
    : 100

for (let i = lowerLimit; i <= upperLimit; i++) {
  console.log(fizzBuzz(i))
}
