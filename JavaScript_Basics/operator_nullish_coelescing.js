//nullish coelescing operator (??) is a 
// logical operator that returns 
// its right-hand side operand when its 
// left-hand side operand is null or undefined,
//  and otherwise returns its left-hand side operand.

// ?? is useful in test data handling when 
// you want to provide a default value for null
//  or undefined variables.
let a = null;
let b = a ?? 'default value';
console.log(b); // Output: 'default value' (since a is null)    
let c = undefined;
let d = c ?? 'default value';
console.log(d);
// Output: 'default value' (since c is undefined)
let str1 =null ?? "default string";
let str2= str1 + "  Another string";
console.log(str2); // Output: "default stringAnother string" (null is replaced with the default value)

