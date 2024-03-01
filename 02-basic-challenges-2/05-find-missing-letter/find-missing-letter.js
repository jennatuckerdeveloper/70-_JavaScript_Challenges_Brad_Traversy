const findMissingLetter = (letters) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const sectionStart = alphabet.indexOf(letters[0])
	const sectionLength = letters.length + 1
	const alphabetSection = alphabet.slice(sectionStart).slice(0, sectionLength)
	let missingSequentialLetter
	for (let i = 0; i < alphabetSection.length; i++) {
		if (alphabetSection[i] !== letters[i]) {
			missingSequentialLetter = alphabetSection[i]
			break
		}
	}
	return missingSequentialLetter
}

module.exports = findMissingLetter
