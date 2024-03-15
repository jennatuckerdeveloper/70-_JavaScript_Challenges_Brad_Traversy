const isValidIPv4 = (possibleIPv4) => {
	const segments = possibleIPv4.split('.')
	if (segments.length !== 4) return false
	const noLeading0 = (seg, num) => seg === num.toString()
	return segments.every((segment) => {
		const int = parseInt(segment)
		return int >= 0 && int <= 255 && noLeading0(segment, int)
	})
}

module.exports = isValidIPv4
