export function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valleyCount = 0;
  let seaLevel = 0;

  for (let i = 0; i < steps; i++) {
    const currChar = path.charAt(i);
    if (currChar === 'U') {
      seaLevel++;
      if (seaLevel === 0) {
        valleyCount++;
      }
    }
    else {
      seaLevel--;
    }
  }

  console.log('valleyCount: ', valleyCount);
  return valleyCount;
}