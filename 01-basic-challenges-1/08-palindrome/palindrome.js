const reverseString = (str) => str.split('').reverse().join('')

const onlyAlphaNumChars = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '')

const isPalindrome = (str) =>
	onlyAlphaNumChars(str) === onlyAlphaNumChars(reverseString(str))

module.exports = isPalindrome
