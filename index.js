function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";

  return num;
}

function divisibleBy(num, x) {
  return num % x === 0;
}

console.log(fizzBuzz(15));
module.exports = { fizzBuzz, divisibleBy };
