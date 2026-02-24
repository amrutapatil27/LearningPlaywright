// basic arithmatic operators 
// +, -, *, /, % (modulus), ** (exponentiation)

let a = 10;
let b = 5;
console.log(a + b); // Output: 15 (Addition)
console.log(a - b); // Output: 5 (Subtraction)
console.log(a * b); 
console.log(a / b); // Output: 2 (Division)
console.log(a % b); // Output: 0 (Modulus)
console.log(a ** b); // Output: 100000 (Exponentiation)     

//short cuts using operators
let c = 10;
c += 5; // c is now 15 (equivalent to c = c + 5)
console.log(c); // Output: 15   
c *= 2; // c is now 30 (equivalent to c = c * 2)
console.log(c); // Output: 30

// comparison operators always result in boolean true or false
console.log(5 == 5); // Output: true (Equality)
console.log(5 === 5); // Output: true (Strict Equality)
console.log(5 == '5'); // Output: true (Equality with type coercion)
console.log(5 === '5'); // Output: false (Strict Equality without type coercion)  
console.log(5 != 5); // Output: false (Inequality)
console.log(5 !== 5); // Output: false (Strict Inequality)
console.log(5 != '5'); // Output: false (Inequality with type coercion)
console.log(5 !== '5'); // Output: true (Strict Inequality without type coercion)
console.log(5 > 3); // Output: true (Greater than) 
console.log(5 < 3); // Output: false (Less than)
console.log(5 >= 5); // Output: true (Greater than or equal to)
console.log(5 <= 4); // Output: false (Less than or equal to)   
