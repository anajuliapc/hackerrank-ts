'use strict';

import { WriteStream, createWriteStream } from "fs";
import { repeatedString } from "./repeated-string";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */



function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const s: string = readLine();

  const n: number = parseInt(readLine().trim(), 10);

  const result: number = repeatedString(s, n);

  ws.write(result + '\n');

  ws.end();
}
