export function jumpingOnClouds(clouds: number[]): number {
  let jumps = 0;
  let currPosition = 0;

  while (currPosition < clouds.length) {
    if (currPosition === clouds.length - 1) {
      return jumps;
    }

    if (clouds[currPosition + 2] === 1) {
      currPosition++;
    }
    else {
      currPosition += 2
    }
    jumps++
  }

  return jumps
}
