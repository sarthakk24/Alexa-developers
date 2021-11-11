console.log("javascript working");

const formBtn = document.querySelector(".form-btn");
const inputEmail = document.querySelector(".input-email");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputEmail.value = "";
});
