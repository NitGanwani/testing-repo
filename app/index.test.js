import functions from "./index";

describe("Given a checkIfHasVowels function", () => {
  describe("When it receives 'perro'", () => {
    test("Then it should return false", () => {
      const word = "perro";

      const expectedValue = functions(word);

      expect(expectedValue).toBe(false);
    });
  });
  describe("When it receives 'murcielago'", () => {
    test("Then it should return true", () => {
      const word = "muricelago";

      const expectedValue = functions(word);

      expect(expectedValue).toBe(true);
    });
  });
});

describe("Given a checkIfEven function", () => {
  describe("When it receives 6", () => {
    test("Then it should return true", () => {
      const number = 6;

      const expectedValue = functions(number);

      expect(expectedValue).toBe(true);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return false", () => {
      const number = 5;

      const expectedValue = functions(number);

      expect(expectedValue).toBe(false);
    });
  });
});
