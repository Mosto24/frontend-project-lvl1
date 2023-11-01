#!/usr/bin/env node

import redlineSync from 'readline-sync';
import askname from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();

export default function game2(userName) {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const mathSign = Math.round(Math.random() * 100);
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    let answer = 0;
    if (mathSign <= 33) {
      console.log(`Question: ${num1} + ${num2}`);
      answer = Number(redlineSync.question('Answer: '));
      if (answer === (num1 + num2)) {
        console.log('Correct!');
      }
      if (answer !== (num1 + num2)) {
        console.log(`${answer} is wrong answer ;(. Correct answer was '${num1 + num2}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (mathSign >= 33 && mathSign <= 66) {
      console.log(`Question: ${num1} - ${num2}`);
      answer = Number(redlineSync.question('Answer: '));
      if (answer === (num1 - num2)) {
        console.log('Correct!');
      }
      if (answer !== (num1 - num2)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 - num2}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (mathSign > 66) {
      console.log(`Question: ${num1} * ${num2}`);
      answer = Number(redlineSync.question('Answer: '));
      if (answer === (num1 * num2)) {
        console.log('Correct!');
      }
      if (answer !== (num1 * num2)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 * num2}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

game2(name);
