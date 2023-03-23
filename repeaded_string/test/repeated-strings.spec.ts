import { repeatedString } from '../src/repeated-string';

describe('Repeated Strings test suite', () => {
  test('Input 0', () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });

  test('Input 1', () => {
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
});