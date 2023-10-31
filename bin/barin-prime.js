import redlineSync from "readline-sync";

function primality(n) {
    for(let i = 2; i < n; i++) {
       if(n % i === 0) return false;
    }
    return n > 1;
   }

export function game5(name) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const number = Math.round(Math.random()*100);
        console.log(`Question: ${number}`);
        let answer = redlineSync.question('Your answer: ');
        let copyAnswer = answer;
        answer === 'yes' ? answer = true : answer == 'no' ? answer = false : answer = false;
        if (answer === primality(number)) {
            console.log('Correct!');
        } else {
            console.log(`'${copyAnswer}' is wrong answer ;(. Correct answer was '${primality(number)}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
}