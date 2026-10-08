const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function(input) {
    let number = Number(input);
    if (Number.isInteger(number)) {
        console.log(number + " is an integer.");
    } else {
        console.log(number + " is a floating-point number.");
    }
    rl.close();
});