let userObj = {
  name: "John",
  age: 100,
  gender: "male",
  favorite: [{ food: "beans" }, { color: "blue" }],
  sendMessage: function () {
    return `Hello, my name is ${this.name}`;
  },
};

let obj = userObj;

console.log(obj.sendMessage());

// console.log(userObj.favorite[0].food);
// console.log(userObj.sendMessage());

// for (const key in userObj) {
//   console.log(userObj[key]);
// }

// console.log(userObj["age"]);

// let obj = {};
// let anotherObj = obj;

// console.log(obj == anotherObj);

// console.log(Object.keys(userObj));

// console.log(Object.values(userObj));

// console.log(Object.entries(userObj));

// const objToArr = Object.entries(userObj);

// console.log(objToArr);

// const ArrToObj = Object.fromEntries(objToArr);

// console.log(ArrToObj);
