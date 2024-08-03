// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}

x = 32243;
console.log(reverseNumber(x)); // Output: 34223

// 