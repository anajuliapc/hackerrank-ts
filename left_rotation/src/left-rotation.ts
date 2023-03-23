export function rotLeft(a: number[], d: number): number[] {
  const subArrayStart = a.slice(d, a.length);
  const subArrayEnd = a.slice(0, d);
  return subArrayStart.concat(subArrayEnd);
}