const capitalizeFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

const generateHashtag = (str) => {
	if (!str) return false
	if (str.length > 140) return false
	return (
		'#' +
		str
			.split(' ')
			.map((word) => capitalizeFirst(word))
			.join('')
	)
}

module.exports = generateHashtag
