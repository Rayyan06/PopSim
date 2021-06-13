import { getRandomInt } from "./utility";

describe("getRandomInt", () => {
  test("should return a value in between the min and max", () => {
    let min = 10;
    let max = 20;
    let result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
