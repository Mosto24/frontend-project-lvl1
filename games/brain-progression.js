#!/usr/bin/env node

/* eslint-disable no-continue */
import redlineSync from 'readline-sync';
import askname from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
export default function game4(userName) {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const firstProgressionNumber = Math.round(Math.random() * 10);
    const progressionNum = Math.round(Math.random() * 10);
    const questionNumber = Math.round(Math.random() * 10);
    let num = firstProgressionNumber;
    let stringToPrint = '';
    let result = 0;
    for (let j = 0; j < 10; j += 1) {
      if (j === questionNumber) {
        num += progressionNum;
        result = num;
        stringToPrint += '..';
        continue;
      }
      num += progressionNum;
      stringToPrint += ` ${num} `;
    }
    console.log(`Question:${stringToPrint}`);
    const answer = Number(redlineSync.question('Your answer: '));
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

game4(name);
