// You have to leverage the spread operator to map this.  I did not remember that!
const rangeArr = (num) => [...new Array(num)].map((_, i) => i + 1)

const isDivisibleBy = (div, num) => !(num % div)

const makeFizzBuzzString = (isDivisibleBy3, isDivisibleBy5) =>
  `${isDivisibleBy3 ? 'Fizz' : ''}` + `${isDivisibleBy5 ? 'Buzz' : ''}`

const fizzBuzzArray = (count) =>
	rangeArr(count).map((num) => {
		const isDivisibleBy3 = isDivisibleBy(3, num)
		const isDivisibleBy5 = isDivisibleBy(5, num)
		const fizzBuzzStr = makeFizzBuzzString(isDivisibleBy3, isDivisibleBy5)
		return !!fizzBuzzStr ? fizzBuzzStr : num
	})

module.exports = fizzBuzzArray
