const countOccurrences = (string, letter) =>
	string.split('').filter((e) => e === letter).length

/* 

Brad's second version would be a great optimization
for very long strings.  However, I don't think it is 
intuitive for any engineer reading the code.  Unless
there is a performance cost of meaning, I'd keep it 
readable and intuitive instead.  The output if you 
log looks "hacky."

const countOccurrences = (string, letter) => {
  console.log(string.split(letter))
	return string.split(letter).length - 1
}
*/

module.exports = countOccurrences
