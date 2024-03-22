const fibonacci = (n) => {
  if (n < 2) {
    console.log(`${n} - base case`)
    return n
  }
  console.log( `${n} - else`)
	return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = fibonacci
