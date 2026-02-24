let APIStatusCode= 500;
if (APIStatusCode === 200) {
    console.log("API call successful");
} else if (APIStatusCode === 404) {
    console.log("API endpoint not found");
} else if (APIStatusCode === 500) {
    console.log("Internal server error");
} else {
    console.log("Unknown API status code");
}   

//interview question. tricks of if else statements
if("hello") console.log("string is truthy"); // Output: "string is truthy" (non-empty string is truthy)
if ("") console.log("empty string is falsy"); // No output (empty string is falsy)
if(1) console.log("1 is truthy"); // Output: "1 is truthy" (non-zero number is truthy)
if(-1) console.log("-1 is truthy"); // Output: "-1 is truthy" (non-zero number is truthy)   
if(0) console.log("zero is falsy"); // No output (0 is falsy)
if(false) console.log("false is falsy"); // No output (false is falsy)
if(null) console.log("null is falsy"); // No output (null is falsy)
if(undefined) console.log("undefined is falsy"); // No output (undefined is falsy)
if (NaN) console.log("NaN is falsy"); // No output (NaN is falsy)   
if ({} ) console.log("empty object is truthy"); // Output: "empty object is truthy" (objects are truthy)
if ([]) console.log("empty array is truthy"); // Output: "empty array is truthy" (arrays are objects and are truthy)