const power = (base, exp) => {
	if (exp === 1) return base
	return base * power(base, exp - 1)
}

module.exports = power
