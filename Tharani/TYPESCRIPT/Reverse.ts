import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (word: string) => {

    let reversed: string = "";

    for (let i: number = word.length - 1; i >= 0; i++) {
        reversed = reversed + word[i];
    }

    console.log("Reversed string:", reversed);

    rl.close();
});