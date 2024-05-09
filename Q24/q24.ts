// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// •	Tests for equality and inequality with string
// •	Tests using the lower case function.
// •	Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
// •	Test using “and” and “or” operators.
// •	Test whether an item is in an array.
// •	Test whether an item is not in an array.

let car:string = "subaru";
let age:number = 30;
let number:number [] = [1, 2, 3, 4];

//String Tests

// Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

//\Strict equality (False)
console.log("Is car === 'subaru'? I predict False.")
console.log(car === 'suabru');

// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota');

// Test 4: Strong Inequality (False)
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru');


//Lower function tests

// Test 5: Lowercase Conversion (True)

console.log("Is car.tolowercase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

// Test 6: Lowercase Conversion (False)

console.log("Is car.tolowercase() === 'Subaru'? I predict False.");
console.log(car.toLowerCase() === 'Subaru');   

//Numerical Tests

// Test 7: Equality (True)

console.log("Is age == 30? I predict True");
console.log(age == 30);

//Test 8: Inequality (False)
console.log("Is age != 35? I predict True");
console.log(age != 35);

//Test 9: Greater Than (False)
console.log("Is age > 35? I predict False.");
console.log(age > 35);

//Test 10:  Less than (True)
console.log("Is age < 35? I predict True.")
console.log(age < 35);

//Test 11: Greater than or equal (True)
console.log("Is age >= 30? I predict True.")
console.log(age >= 30);

//Test 12: Less than or equal to (False)
console.log("Is age <= 29? I predict False.");
console.log(age <= 29);

//Logical Operators

//Test 13: AND (True)
console.log ("Is age > 29 && age == 30? I predict True");
console.log (age > 29 && age == 30);

//Test 14: OR (False)
console.log ("Is age < 25 || age > 30? I predict False.");
console.log(age < 25 || age > 30);

//Array Tests

//Test 15: In Array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in number);

//Test 16: Not in array (False)
console.log("Is 5 not in number? I predict False.");
console.log(5 in number);






















