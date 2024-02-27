const calculator = (num1, num2, operator) => {
	const operatorFns = {
		'+': (num1, num2) => num1 + num2,
		'-': (num1, num2) => num1 - num2,
		'*': (num1, num2) => num1 * num2,
		'/': (num1, num2) => num1 / num2
	}
	return operatorFns[operator](num1, num2)
}
module.exports = calculator
