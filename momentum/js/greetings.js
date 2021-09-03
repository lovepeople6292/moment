const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const greeting = document.querySelector("#greeting");

const 히든 = "hidden";
const 유저이름 = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(히든);
  const 인풋유저이름 = loginInput.value;
  localStorage.setItem(유저이름, 인풋유저이름);
  paintGreetings(인풋유저이름);
}
function paintGreetings(인풋유저이름) {
  greeting.classList.remove(히든);
  greeting.innerText = `Hello ${인풋유저이름}`;
}

const 로컬저장된유저이름 = localStorage.getItem(유저이름);

if (로컬저장된유저이름 === null) {
  //show the form
  loginForm.classList.remove(히든);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(로컬저장된유저이름);
}
