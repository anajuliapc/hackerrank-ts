import { countingValleys } from '../src/counting-valleys';

describe('simple test', () => {
  test('test 1', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
  });

  test('test 2', () => {
    expect(countingValleys(12, 'DDUUDDUDUUUD')).toBe(2);
  });
});
