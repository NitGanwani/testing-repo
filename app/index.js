const checkIfHasAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (number) => number % 2 === 0;

export default {
  checkIfHasAllVowels,
  checkIfEven,
};
