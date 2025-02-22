const arr = ["John", "Ben", "Ronke", "David"];

// const newArr = arr.map((name) => {
//   return name;
// });
const [firstName, ...names] = arr;

console.log(firstName);
console.log(names[0]);

// const firstName = arr[0];
// const secondName = arr[1];
// const thirdName = arr[2];
// const fourthName = arr[3];
// console.log(firstName);

// const [, , thirdName, fourthName] = arr;

// console.log(thirdName);

// const obj = { name: "Ronke", age: 20, gender: "female" };

// const { age, name, gender } = obj;

// Rest Parameter & Spread Operator (...)

function Names(...name) {
  console.log(name[0], name[1], name[2], name[3], name[4]);
}

Names("John", "David", "Ada", "Obi", "Josh");
