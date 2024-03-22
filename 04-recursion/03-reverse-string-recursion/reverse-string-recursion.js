const reverseString = (str) => {
	if (str.length === 0) return ''
	const lastIndex = str.length - 1
	return str[lastIndex] + reverseString(str.slice(0, lastIndex))
}

module.exports = reverseString
