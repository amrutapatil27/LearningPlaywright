//Data types supported in JavaScript with examples.

let color = 0xFF0000; // Hexadecimal for red. 
let OctalNum = 0o755; // Octal number.
let BinaryNum = 0b1010; // Binary number for 10.
let scinum = 1.23e4; // Scientific notation for 12300.
const PI = 3.14159; // Constant value for pi.

//Strings
let singleQuoteStr = 'Hello, World!';
let doubleQuoteStr = "Hello, JavaScript!";
let templateLiteralStr = `The value of PI is approximately ${PI}.`;
// good practice to use double quotes for strings in JavaScript,  
// as it allows for easier inclusion of single quotes without needing to escape them. 
//  For example:
let message = "It's a nice day!"; // No need to escape the single quote.

//Template literals are enclosed by backticks (`) 
// and can contain placeholders for variables and expressions, 
// which are indicated by the ${} syntax. For example:
let name1 = "Alice";
let greeting = `Hello, ${name1}!`; // Output: Hello, Alice! 
console.log(greeting); // Output: Hello, Alice!

//to store path of a file, you need to use extra \ to escape the backslash character.
// single slash is not allowed in JavaScript strings.
// For example:
let filePath = "C:\\Users\\amruta\\Documents\\myfile.txt"; // Correct way to represent a file path in JavaScript.
console.log(filePath); // Output: C:\Users\amruta\Documents\myfile.txt

//But in case of forward slashes, you can use them directly without escaping.
let myurl = "https://www.google.com/login"; // Forward slashes do not need to be escaped.
console.log(myurl); // Output: https://www.google.com/login


//null and undefined example 
let userName; // Declared but not initialized, so it is undefined.
console.log(userName); // Output: undefined
let itemValue = null; // Represents the intentional absence of any object value.
console.log(itemValue); // Output: null
// In JavaScript, null and undefined are distinct 
// types.
// undefined typically indicates that 
// a variable has been declared but not assigned a value, 
// while null is an assignment value that 
// can be used to represent the absence of any object value. 
/*  
  typeof null is "object" (fun fact: this is actually a famous bug in JS that was never fixed!).

   typeof undefined is "undefined"

   The only time many developers (including experts) use == is when they want to check if something is either null or undefined in one go:

JavaScript
// This checks for BOTH null and undefined
if (ans == null) { 
  // do something
}
*/


// Hoisting example


// Operators example
let a = 10;
let b = 5;          
console.log(a + b); // Output: 15 (Addition)
console.log(a - b); // Output: 5 (Subtraction)
console.log(a * b); // Output: 50 (Multiplication)
console.log(a / b); // Output: 2 (Division)
console.log(a % b); // Output: 0 (Modulus)
console.log(a ** b); // Output: 100000 (Exponentiation)     
console.log(5==5); // Output: true (Equality)
console.log(5===5); // Output: true (Strict Equality)
console.log(5== '5'); // Output: true (Equality with type coercion)
console.log(5=== '5'); // Output: false (Strict Equality without type coercion)

