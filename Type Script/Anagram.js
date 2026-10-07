"use strict";
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");
    if (str1.length !== str2.length) {
        return false;
    }
    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}
let string1 = "listen";
let string2 = "silent";
if (isAnagram(string1, string2)) {
    console.log("The strings are anagrams.");
}
else {
    console.log("The strings are not anagrams.");
}
