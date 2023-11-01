import redlineSync from "readline-sync";
import { askname } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
export function game4(name) {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i++) {
        const firstProgressionNumber = Math.round(Math.random()*10);
        const progressionNum = Math.round(Math.random()*10);
        const questionNumber = Math.round(Math.random()*10);
        let num = firstProgressionNumber;
        let stringToPrint = "";
        let result = 0;
        for (let i = 0; i < 10; i++) {
            if (i === questionNumber) {
                result = num += progressionNum;
                stringToPrint += ' ... ';
                continue;
            }
            num += progressionNum;
            stringToPrint += ` ${num} `
        }
        console.log('Question: ' + stringToPrint);
        const answer = Number(redlineSync.question('Your answer: '));
        if (answer === result) {
            console.log(`Correct!`);
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

game4(name);