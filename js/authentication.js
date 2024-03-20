const inputs = document.querySelectorAll("input");
console.log(inputs);
const registerButton = document.querySelector(".registerButton");
console.log(registerButton);
const logInInput = document.querySelectorAll(".input");
console.log(logInInput);
const error = document.querySelector(".error");
console.log(error);
registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  const user = {};
  
  inputs.forEach((input) => {
    if (input.value === "") {
      error.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
      return
    } else if (
      document.querySelector("[name=password]").value !==
      document.querySelector("[name=confirm]").value
    ) {
      error.textContent = "Passwords don't match";
      document.querySelector("[name=password]").style.border = "2px solid red";
      document.querySelector("[name=confirm]").style.border = "2px solid red";
      return
    } else {
      if (input.name !== "confirm" && input.name!=="checkbox") {
        user[`${input.name}`] = input.value;
      }
    }
  });

//   Add user to Local Storage



  console.log(user);
});

logInInput.addEventListener("click", function (e) {
  e.preventDefault();
  logInInput.forEach((input) => {});
});
