import redlineSync from 'readline-sync';

export default function askname() {
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
