const formatPhoneNumber = (numArr) => {
	const number = numArr.join('')
	const phoneNumber = {
		areaCode: number.slice(0, 3),
		prefix: number.slice(3, 6),
		lineNumber: number.slice(6)
	}
	return `(${phoneNumber.areaCode}) ${phoneNumber.prefix}-${phoneNumber.lineNumber}`
}

module.exports = formatPhoneNumber
