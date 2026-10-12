// Simulate async API calls using Promises
function apiCall1(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Response from API 1"), 1000));
}

function apiCall2(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Response from API 2"), 1000));
}

function apiCall3(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Response from API 3"), 1000));
}

async function runSequentially(): Promise<void> {
    console.log("Starting sequential API calls...");

    const result1 = await apiCall1();
    console.log(result1);

    const result2 = await apiCall2();
    console.log(result2);

    const result3 = await apiCall3();
    console.log(result3);

    console.log("All API calls completed.");
}

runSequentially();
