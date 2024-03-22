document.addEventListener("DOMContentLoaded", () => {
  const getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
  const regButton = document.querySelector(".regButton");
  console.log(regButton);
  const loginButton = document.querySelector(".loginButton");
  console.log(loginButton);
  const logoutButton = document.querySelector(".logoutButton");
  console.log(logoutButton);
  const addaspaButton =document.querySelector(".addaspa-button");
  console.log(addaspaButton)

  if (getCurrentUser) {
    regButton.style.display = "none";
    loginButton.style.display = "none";
  } else {
    regButton.style.display = "inline-block";
    loginButton.style.display = "inline-block";
    logoutButton.style.display = "none";
    
  }

  if(getCurrentUser.spa_owner){
    addaspaButton.style.display ="inline-block"

  } else {
    addaspaButton.style.display ="none"


  }

  logoutButton.addEventListener("click", function (e) {
    e.preventDefault()
    localStorage.removeItem("currentUser");
    window.location.href = `${window.location.origin}/index.html`;
  });
});

