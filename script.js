function reverseDigits(number) {
    if (number === 0) {
        return [0];
    }
    
    const digits = [];
    
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    
    return digits;
}

// Example usage
const number = 12345;
const reversedDigits = reverseDigits(number);
console.log(reversedDigits); // Output: [5, 4, 3, 2, 1]

// 2
function digitize(number) {
    return String(number).split('').map(Number).reverse()
  }

const reversedDigits2 = digitize(number);
console.log(reversedDigits2);