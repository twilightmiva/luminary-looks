const logInInput = document.querySelectorAll(".input");
console.log(logInInput);
const enterButton = document.querySelector(".enterButton");
console.log(enterButton);
const loginError = document.querySelector(".loginError");
console.log(loginError);
const users = JSON.parse(localStorage.getItem("users"));
console.log(users);

enterButton.addEventListener("click", function (e) {
  e.preventDefault();
  let userFound
  const user = {};
  logInInput.forEach((input) => {
    if (input.value === "") {
      loginError.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
      return;
    } else {
      loginError.textContent = "";
      input.style.border = "none";
      user[`${input.name}`] = input.value;
    }
  });

  // Check if user is in Local Storage
  if (loginError.textContent === "") {
   users && users.find((userItem) => {
      if (
        user.email === userItem.email &&
        user.password === userItem.password
      ) {
        localStorage.setItem("currentUser",JSON.stringify(userItem))
         location.href = "http://127.0.0:5500";
      } else {
        loginError.textContent = "Wrong Credentials";
      }
    });
  }
});
