const greeting = document.querySelector(".greeting");
const btn = document.querySelector(".btn");
const section = document.querySelector(".section");

// function changeText() {
//   greeting.innerText = "How are you?";
// }

// DOM property Event Handler

// btn.onclick = function () {
//   greeting.innerText = "How are you?";
// };

// addEventListener

function moveIn() {
  section.style.width = "300px";
  section.style.height = "300px";
}

function moveOut() {
  section.style.width = "200px";
  section.style.height = "200px";
}

btn.addEventListener("click", function () {
  greeting.innerText = "How are you?";
});

function btnValue(value) {
  console.log(value);
}
