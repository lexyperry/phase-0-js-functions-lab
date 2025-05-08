function calculateTax(amount) {
    const tax = amount * 0.10;
    return tax;
};
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1, num2) {
    if(num1 > num2) {
        return num1; 
    }
    else {
        return num2;

    }
}
function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    if (discountPercentage < 0) {
        discountPercentage = 0;
    }
    if (discountPercentage > 100) {
        discountPercentage = 100; 
    }

    const discount = (discountPercentage / 100) * originalPrice;
    return originalPrice - discount;
}






// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };