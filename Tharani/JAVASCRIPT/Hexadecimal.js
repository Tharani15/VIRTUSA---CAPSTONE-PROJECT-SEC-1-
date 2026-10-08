const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter R, G, B values separated by spaces: ", (answer) => {

    let rgb = answer.split(" ").map(Number);

    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];

    let red = r.toString(16).padStart(2, "0");
    let green = g.toString(16).padStart(2, "0");
    let blue = b.toString(16).padStart(2, "0");

    let hex = "#" + red + green + blue;

    console.log("Hexadecimal color:", hex);

    rl.close();
});