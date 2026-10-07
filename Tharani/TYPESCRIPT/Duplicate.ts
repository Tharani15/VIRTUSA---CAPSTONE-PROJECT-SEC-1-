import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (word: string) => {

    let result: string = "";

    for (let i: number = 0; i < word.length; i++) {

        let found: boolean = false;

        for (let j: number = 0; j < result.length; j++) {

            if (word[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (found === false) {
            result = result + word[i];
        }
    }

    console.log("After removing duplicates:", result);

    rl.close();
});