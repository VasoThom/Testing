const { fizzBuzz, divisibleBy } = require("./index");

test("fizzBuzz ist eine Function", () => {
  expect(fizzBuzz).toBeInstanceOf(Function);
});

test("Gibt eine Zahl zurück", () => {
  const result = fizzBuzz(2);
  expect(typeof result).toBe("number");
});

test("Gibt die übergebene Zahl zurück", () => {
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(7)).toBe(7);
});

test("Gibt `fizz`, wenn  die  Zahl durch 3 teilbar", () => {
  expect(fizzBuzz(3)).toBe("fizz");
});

test("Gibt `buzz`, wenn  die  Zahl durch 5 teilbar", () => {
  expect(fizzBuzz(5)).toBe("buzz");
});

test("Gibt `fizzbuzz`, wenn  die  Zahl durch 3 und  5 teilbar", () => {
  expect(fizzBuzz(15)).toBe("fizzbuzz");
});

test("divisibleBy ist eine Function", () => {
  expect(divisibleBy).toBeInstanceOf(Function);
});
test("Gibt einen Boolean  zurück", () => {
  expect(typeof divisibleBy()).toBe("boolean");
});

test("Gibt true, wenn  die  Zahl durch xteilbar", () => {
  expect(divisibleBy(12, 3)).toBe(true);
  expect(divisibleBy(20, 5)).toBe(true);
});
