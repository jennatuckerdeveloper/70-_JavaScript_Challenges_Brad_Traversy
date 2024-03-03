const findFirstNonRepeatingCharacter = (str) => {
	const chars = str.split('')
	// To prevent running the duplicated chars multiple times.
	const uniqueChars = Array.from(new Set(str.split('')))
	let foundNonRepeating = null
	// Using a for loop instead of forEach to break when found.
	for (let char of uniqueChars) {
		if (chars.filter((e) => e === char).length === 1) {
			foundNonRepeating = char
			break
		}
	}
	return foundNonRepeating
}

module.exports = findFirstNonRepeatingCharacter
