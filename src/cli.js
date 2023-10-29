import redlineSync from "readline-sync";

export function askname() {
let name = redlineSync.question("May I have your name? ");
console.log("Hello, " + name + "!");
}