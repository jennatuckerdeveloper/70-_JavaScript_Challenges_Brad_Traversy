const areAllCharactersUnique = (str) =>
	str.split('').length === new Set(str.split('')).size

module.exports = areAllCharactersUnique
