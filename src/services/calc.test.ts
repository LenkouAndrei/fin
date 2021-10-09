import { calc } from "./calc";

test("correct calculation", () => {
  const res = calc(2, 10);
  expect(res).toBe(12);
});
