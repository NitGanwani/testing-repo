const checkIfHasAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (number) => number % 2 === 0;

/* Const checkIfPrime = (number) => {
  let isPrime = true;
  for (let primeNumber = 2; primeNumber < number; primeNumber++) {
    if (number % primeNumber === 0 || number === 1 || number < 1) {
      isPrime = false;
    }
  }

  return isPrime;
};

console.log(checkIfPrime(1)); */

const checkLargestNumber = (numbers) => {
  numbers.sort((lowestNumber, largestNumber) => lowestNumber - largestNumber);
  return numbers[numbers.length - 1];
};

export default {
  checkIfHasAllVowels,
  checkIfEven,
  checkLargestNumber,
};
