import * as readline from 'readline';
import * as R from 'ramda';
import { countingValleys } from './counting-valleys';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines: string[] = [];
let currentLine: number = 0;

rl.on('line', (line: string) => {
  if (R.isEmpty(line)) {
    main();
  }

  inputLines.push(line);
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  const steps: number = parseInt(readLine().trim(), 10);
  console.log(steps);

  const path: string = readLine();
  console.log('path: ', path);

  const result: number = countingValleys(steps, path);
  console.log(result);

  rl.write(result + '\n');
  rl.close();
}