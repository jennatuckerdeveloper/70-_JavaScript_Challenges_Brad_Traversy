// For some reason, Brad doesn't want you to use Math.max.
// const findMaxNumber = (numArr) => Math.max(...numArr)

const findMaxNumber = (numArr) =>
	numArr.reduce((acc, currentVal) => (acc > currentVal ? acc : currentVal))

module.exports = findMaxNumber
