export function repeatedString(s: string, n: number): number {
  const numOfAinSubStr = (s.match(/a/g))?.length;

  if (!numOfAinSubStr) {
    return 0;
  }

  const subStrLength = s.length;
  const repeatedSubStr = Math.floor(n / subStrLength);
  const numOfRepetitions = numOfAinSubStr * repeatedSubStr;

  const incompleteSubStrLength = n % subStrLength;


  if (!(incompleteSubStrLength)) {
    return numOfRepetitions;
  }

  const extraRepeatedA = s.substring(0, incompleteSubStrLength).match(/a/g)?.length || 0;

  return numOfRepetitions + extraRepeatedA;
}