// getElement

// getElementById
const greeting = document.getElementsByClassName("greeting");

console.log(greeting);

// getElementByName
// getElementByClassName
// getElementByTagName

// querySelector
// querySelector

const greet = document.querySelector(".greeting");

greet.setAttribute("id", "paragraph");
greet.removeAttribute("id");

console.log(greet);
console.log(greet.hasAttribute("class"));
console.log(greet.getAttribute("class"));

// classes

greet.classList.add("text");
greet.classList.remove("text");
console.log(greet.classList.contains("greet"));
greet.classList.toggle("paragraph");

console.log(greet.className);

greet.style.color = "red";
greet.style.fontSize = "30px";
greet.style.fontWeight = "bold";

// querySelectorAll

// const allGreetings = document.querySelectorAll(".greeting");

// for (const greeting of allGreetings) {
//   console.log(greeting.innerText);
// }

// console.log(allGreetings);

// Modifying the DOM Elements
const section = document.querySelector(".section");

const div = document.createElement("div");

// innerText/textContent

div.textContent = "Container";

section.appendChild(div);

section.removeChild(div);

console.log(section.innerHTML);
