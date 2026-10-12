function parseAndDouble(input: string): void {
    try {
        const num = parseInt(input);
        if (isNaN(num)) {
            throw new Error("Invalid input: Not a number");
        }
        console.log("Result: " + num * 2);
    } catch (error) {
        console.log("Error caught: " + (error as Error).message);
    } finally {
        console.log("Execution complete (finally block).");
    }
}

parseAndDouble("10");    // Valid input
parseAndDouble("abc");   // Invalid input
