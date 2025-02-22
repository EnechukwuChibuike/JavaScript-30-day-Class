const arr = ["Alexis", "Mercy", "Victoria", "Bernard"];

// console.log(arr.length);

// console.log(arr[arr.length - 1]);

// // LIFO - Last In, First Out

// arr.push("Esther");

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift("Esther");

// console.log(arr);

// arr.shift();

// console.log(arr);

// // splice()

// arr.splice(0, 0, "Daniel", "David");

// console.log(arr);

// FIFO - First In, First Out

// push()
// pop()
// shift()
// unshift()
// .....................................................

// toSpliced();

// let updatedArr = arr.toSpliced(0, 0, "Emmanuel");

// console.log(arr);
// console.log(updatedArr);

// indexOf()
// join()
let joinArr = arr.join("");
console.log(joinArr);

// sort() -> toSorted()

const nums = [2, 6, 9, 3, 1, 8];

// nums.sort((a, b) => b - a);

console.log(nums);

let arrangedNumbers = nums.toSorted((a, b) => a - b);

console.log(arrangedNumbers);

// reverse()
arr.reverse();
console.log(arr);

// fill()
// arr.fill("Stakeholder");
// console.log(arr);

// includes()
console.log(arr.includes("Bernar"));

for (let num of nums) {
  console.log(num);
}
