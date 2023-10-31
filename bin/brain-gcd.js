import redlineSync from "readline-sync";


function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

export function game3(name) {
    for (let i = 0; i < 3; i++) {
        const num1 = Math.round(Math.random()*100);
        const num2 = Math.round(Math.random()*100);
        const nod = NOD(num1, num2);
        console.log('Find the greatest common divisor of given numbers.');
        console.log(`Question: ${num1} ${num2}`);
        const answer = Number(redlineSync.question('Your answer: '));
        if (answer === nod) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was '${nod}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
