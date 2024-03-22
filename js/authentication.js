const inputs = document.querySelectorAll("input");
console.log(inputs);
const registerButton = document.querySelector(".registerButton");
console.log(registerButton);

const error = document.querySelector(".error");
console.log(error);
registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  const user = {};
  let users = [];
  inputs.forEach((input) => {
    if (input.value === "") {
      error.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
    } else if (
      document.querySelector("[name=password]").value !==
      document.querySelector("[name=confirm]").value
    ) {
      error.textContent = "Passwords don't match";
      document.querySelector("[name=password]").style.border = "2px solid red";
      document.querySelector("[name=confirm]").style.border = "2px solid red";
    } else {
      input.style.border = "none";

      if (input.name !== "confirm" && input.name !== "checkbox") {
        error.textContent = "";
        user[`${input.name}`] = input.value;

      }

      if(document.querySelector("[name=checkbox]").checked){
        user["spa_owner"] = true
      }

    }
  });

  console.log(error);

  //   Add user to Local Storage
  if (error.textContent === "") {
    if (localStorage.getItem("users") === null) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }

    location.href = "http://127.0.0.1:5500/login.html"

  }

  console.log(user);
});


