
/*
psuedo-code implementation by book

while (quotient is not zero)
  divide the decimal number by the new base
  remainder <- next digit to left of answer
  quotient <- decimal number
*/

const b = (number, target_base=2) => {
  let quotient = number
  let remainders = []

  while(quotient > 0) {
    remainders.push(quotient % target_base)
    quotient = Math.floor(quotient / target_base)
  }

  return remainders.join('')
}

// recursively divide quotient and use remainder to create binary string
const br = (quotient, remainders=[], target_base=2) => (
  quotient > 0
    ? br(
      Math.floor(quotient / target_base), 
      [...remainders, quotient % target_base]
    )
    : remainders.join('')
)

// split binary string and multiply each section by 2 ^ index
const d = (number) => (
  String(number).split('').reverse()
    .map((n, i) => (
      Math.pow(2, i) * parseInt(n)
    ))
    .reduce((acc, cur) => acc + cur)
)

// tests
console.log(b(93)) // => 1011101
console.log(br(93)) // => 1011101
console.log(d("1011101")) // => 93