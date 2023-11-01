import redlineSync from "readline-sync";
import { askname } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
export function game2(name) {
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i++) {
        const mathSign = Math.round(Math.random()*100);
        const num1 = Math.round(Math.random()*100);
        const num2 = Math.round(Math.random()*100);
        let answer = 0;
        if (mathSign <= 33) {
            console.log(`Question: ${num1} + ${num2}`);
            answer = Number(redlineSync.question('Answer: '))
            if (answer === (num1 + num2)) {
                console.log('Correct!');
            }
            if (answer !== (num1 + num2)) {
                console.log(`${answer} is wrong answer ;(. Correct answer was '${num1 + num2}'.`);
                console.log(`Let's try again, ${name}!`);
                return;
            }
        }
        if (mathSign >= 33 && mathSign <= 66) {
            console.log(`Question: ${num1} - ${num2}`);
            answer = Number(redlineSync.question('Answer: '))
            if (answer === (num1 - num2)) {
                console.log('Correct!');
            }
            if (answer !== (num1 - num2)) {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 - num2}'.`);
                console.log(`Let's try again, ${name}!`);
                return;
            }
        }
        if (mathSign > 66) {
            console.log(`Question: ${num1} * ${num2}`);
            answer = Number(redlineSync.question('Answer: '))
            if (answer === (num1 * num2)) {
                console.log('Correct!');
            }
            if (answer !== (num1 * num2)) {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num1 * num2}'.`);
                console.log(`Let's try again, ${name}!`);
                return;
            }
        }
    }
    console.log(`Congratulations, ${name}!`)

}

game2(name);