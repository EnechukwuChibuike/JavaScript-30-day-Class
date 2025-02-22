// A function that returns the sum of 2 numbers

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 3));

// ..........................................

// Function that checks if a number is a Prime Number

function isPrime(num) {
  if (num <= 1) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

console.log(isPrime(15));
// ................................................

// Function that checks if a number is Even or Odd Number

function EvenOrOdd(num) {
  //   if (num % 2 === 0) {
  //     return "Even";
  //   } else {
  //     return "Odd";
  //   }
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(EvenOrOdd(4));
// ......................................................

// Function that prints number in reversed order

function reversedNum(num) {
  let res = "";

  for (let i = num; i > 0; i--) {
    res += i + " ";
  }
  return res;
}

console.log(reversedNum(5));
// ...............................................

// If number is divisor of 3, print Peter. If number is divisor of 5, print Paul. If number is divisor of 3 and 5, print Peter and Paul

function checkDivisor(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "Peter and Paul"
    : num % 5 === 0
    ? "Paul"
    : num % 3 === 0
    ? "Peter"
    : num;
}

console.log(checkDivisor(15));
