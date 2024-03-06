const validateEmail = (str) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)

module.exports = validateEmail
