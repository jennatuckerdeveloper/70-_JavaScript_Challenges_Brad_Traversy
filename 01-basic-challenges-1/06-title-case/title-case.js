const capitalizeFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

const titleCase = (str) =>
	str
		.split(' ')
		.map((word) => capitalizeFirst(word))
		.join(' ')

module.exports = titleCase
