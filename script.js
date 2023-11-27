function indexOfIgnoreCase(str: string, subStr: string): number {
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    const index = lowerStr.indexOf(lowerSubStr);
    return index;
}

// Taking user input
const str = prompt("Enter the main string:");
const subStr = prompt("Enter the substring to search:");

// Checking for valid input
if (str !== null && subStr !== null) {
    const result = indexOfIgnoreCase(str, subStr);
    console.log(`Index of ${subStr} in ${str}: ${result}`);
} else {
    console.log("Invalid input. Please enter valid strings.");
}