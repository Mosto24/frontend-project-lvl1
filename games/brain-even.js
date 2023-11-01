#!/usr/bin/env node

import redlineSync from 'readline-sync';
import askname from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
export default function game1(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = redlineSync.question('Your answer: ');
    if ((number % 2 === 0) && (answer !== 'yes')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if ((number % 2 !== 0) && (answer !== 'no')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

game1(name);
