export function countingValleys(steps: number, path: string): number {
  // Write your code here
  var valleyCount = 0;
  var seaLevel = 0;

  for (var i = 0; i < steps; i++) {
    const currChar = path.charAt(i)
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

  return valleyCount;
}