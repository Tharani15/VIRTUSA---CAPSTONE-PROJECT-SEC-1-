const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter the string which need to be length-wise sorted: " , (answer) => { 
    let word = answer.split(" ");
    word.sort((a,b) => a.length - b.length);
    console.log("Sorted strings: ", word.join(" "));
    r1.close();

}
    
);