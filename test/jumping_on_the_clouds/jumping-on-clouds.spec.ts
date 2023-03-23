import { jumpingOnClouds } from '../../src/jumping_on_the_clouds/jumping-on-clouds';

describe('TDD for JumpingOnClouds problem', () => {
  test('Input 0', () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  });

  test('Input 1', () => {
    expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toBe(3);
  });
});
