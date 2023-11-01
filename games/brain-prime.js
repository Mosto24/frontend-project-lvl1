#!/usr/bin/env node

import redlineSync from 'readline-sync';
import askname from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
function primality(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

export default function game5(userName) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let answer = redlineSync.question('Your answer: ');
    const copyAnswer = answer;
    // eslint-disable-next-line no-unused-expressions, no-nested-ternary
    answer === 'yes' ? answer = true : answer === 'no' ? answer = false : answer = false;
    if (answer === primality(number)) {
      console.log('Correct!');
    } else {
      console.log(`'${copyAnswer}' is wrong answer ;(. Correct answer was '${copyAnswer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
}

game5(name);
