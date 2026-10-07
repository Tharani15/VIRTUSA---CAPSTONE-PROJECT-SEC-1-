class Stack {
    private stack: number[];
    private top: number;

    constructor() {
        this.stack = [];
        this.top = -1;
    }

    push(value: number): void {
        this.top++;
        this.stack[this.top] = value;
    }

    pop(): number | undefined {
        if (this.top == -1) {
            return undefined;
        }

        let value = this.stack[this.top];
        this.top--;

        return value;
    }

    peek(): number | undefined {
        if (this.top == -1) {
            return undefined;
        }

        return this.stack[this.top];
    }

    display(): void {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.stack[i]);
        }
    }
}
let s = new Stack();

s.push(10);
s.push(20);
s.push(30);

console.log("Stack elements:");
s.display();

console.log("Top element:", s.peek());

console.log("Removed element:", s.pop());

console.log("Stack after pop:");
s.display();