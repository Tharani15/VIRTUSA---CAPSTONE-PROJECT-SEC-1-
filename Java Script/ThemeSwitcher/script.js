let isDarkMode = false;
function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        console.log("Dark Mode enabled");
    } else {
        console.log("Light Mode enabled");
    }
}
console.log("Current Theme: Light Mode");
toggleTheme();
toggleTheme();
toggleTheme();