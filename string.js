// string concatenation

console.log("1" + 2);

let firstName = "Bernard";
let secondName = "David";

// let sentence = secondName + firstName + " is always punctual";

let sentence = `${firstName} is always punctual`;

console.log(sentence);

// Template Literals || Template String

// Strings are Immutable

let lowerCaseFirstName = firstName.toLowerCase();

console.log(lowerCaseFirstName);

// toUpperCase();

console.log(sentence.indexOf("is"));
console.log(sentence.lastIndexOf("is"));
console.log(firstName.includes("B"));
console.log(firstName.startsWith("b"));
console.log(firstName.endsWith("e"));

console.log(firstName.slice(3, 6));

console.log(firstName.substr(3, 3));

// concat()

let fullName = firstName.concat(" ", secondName);

console.log(fullName);

// replace()

let fav = "I love python";

let newFav = fav.replace("python", "JavaScript");

console.log(newFav);

// split() // converts the string to an array

console.log(firstName.split(""));

// trim()

console.log(" 2".trim() == "2");

// String()
