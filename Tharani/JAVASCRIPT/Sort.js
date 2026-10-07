const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter numbers that need to be sorted" , (answer) => {
    let number = answer.split(" ").map(Number);
    number.sort((a,b) => a-b);
    console.log("The sorted array is: "  + number);
    r1.close();
}
);