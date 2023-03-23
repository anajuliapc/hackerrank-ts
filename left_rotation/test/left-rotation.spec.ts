import { rotLeft } from "../src/left-rotation";

describe('Test suite for left rotation challenge', () => {
  test('Input 0', () => {
    expect(rotLeft([1, 2, 3, 4, 5], 4)).toStrictEqual([5, 1, 2, 3, 4]);
  });
});