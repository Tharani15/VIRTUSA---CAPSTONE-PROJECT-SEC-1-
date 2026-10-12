function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1: number = 48;
const num2: number = 18;
console.log(`GCD of ${num1} and ${num2} = ${gcd(num1, num2)}`);
