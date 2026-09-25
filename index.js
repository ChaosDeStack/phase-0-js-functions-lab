//function 1
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

console.log(calculateTax(100, 10)); //Output: 10

//function 2
function convertToUpperCase(text) {
    return text.toUpperCase(); 
}

console.log(convertToUpperCase("hello")); //Output: HELLO

//function 3
function findMaximum(num1, num2) {
    return num1 > num2 ? num1:num2;
}

console.log(findMaximum(3, 7)); //Output: 7


//function 4
function isPalindrome(word) {
    return word === word.split("").reverse().join("")
}

console.log(isPalindrome("level")); //Output: true
console.log(isPalindrome("hello")); //Output: false

//function 5
function calculateDiscountedPrice(originalPrice, discountPrice) {
    const discountAmount = originalPrice * (discountPrice / 100);
    return originalPrice - discountAmount;
}

console.log(calculateDiscountedPrice(100, 20)); //Output: 80


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };