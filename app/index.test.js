import functions from "./index";

describe("Given a checkIfHasVowels function", () => {
  describe("When it receives 'perro'", () => {
    test("Then it should return false", () => {
      const word = "perro";

      const expectedValue = functions.checkIfHasAllVowels(word);

      expect(expectedValue).toBe(false);
    });
  });

  describe("When it receives 'murcielago'", () => {
    test("Then it should return true", () => {
      const word = "murcielago";

      const expectedValue = functions.checkIfHasAllVowels(word);

      expect(expectedValue).toBe(true);
    });
  });
});

describe("Given a checkIfEven function", () => {
  describe("When it receives 6", () => {
    test("Then it should return true", () => {
      const number = 6;

      const expectedValue = functions.checkIfEven(number);

      expect(expectedValue).toBe(true);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return false", () => {
      const number = 5;

      const expectedValue = functions.checkIfEven(number);

      expect(expectedValue).toBe(false);
    });
  });
});

describe("Given a checkLargestNumber function", () => {
  describe("When it receives [1, 5, 9, 98, 14, 120, 58]", () => {
    test("Then it should receive 120", () => {
      const numbers = [1, 5, 9, 98, 14, 120, 58];
      const largestNumber = 120;

      const expectedNumber = functions.checkLargestNumber(numbers);

      expect(expectedNumber).toBe(largestNumber);
    });
  });
});
