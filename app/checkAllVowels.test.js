import words from "./checkAllVowels";

describe("Given a checkIfHasVowels function", () => {
  describe("When it receives 'perro'", () => {
    test("Then it should return false", () => {
      const word = "perro";

      const expectedValue = words(word);

      expect(expectedValue).toBe(false);
    });
  });
  describe("When it receives 'murcielago'", () => {
    test("Then it should return true", () => {
      const word = "muricelago";

      const expectedValue = words(word);

      expect(expectedValue).toBe(true);
    });
  });
});
