function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("12345"));   // true
console.log(containsOnlyDigits("123a5"));   // false
console.log(containsOnlyDigits("00099"));   // true
console.log(containsOnlyDigits(""));        // false
