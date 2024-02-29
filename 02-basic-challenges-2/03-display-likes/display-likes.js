const displayLikes = (names) => {
	const likesMsgs = {
		0: (_) => `no one likes this`,
		1: (names) => `${names[0]} likes this`,
		2: (names) => `${names[0]} and ${names[1]} like this`,
		3: (names) => `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: (names) =>
			`${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}
	const whichMsg = names.length < 4 ? names.length : 4
	return likesMsgs[whichMsg](names)
}

module.exports = displayLikes
