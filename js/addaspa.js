const inputs = document.querySelectorAll("input");
console.log(inputs);
const addBtn = document.querySelector(".addbtn");
console.log(addBtn);
const adderror = document.querySelector(".adderror");
const spaImage = document.querySelector("[type=file]");
const spa = {};
let spaImg;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let spas = [];

  inputs.forEach((input) => {
    if (input.value === "") {
      adderror.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
    } else {
      adderror.textContent = "";
      input.style.border = "2px solid black";
      spa[`${input.name}`] = input.value;
    }

    spaImage.addEventListener("change", (e) => {
      console.log(e.target.files[0]);
      const file = spaImage.files[0];

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.addEventListener("load", (e) => {
        spa["image"] = e.target.result;
        console.log(spa);
      });
    });
  });
  console.log(adderror);

  if (adderror.textContent === "") {
    if (localStorage.getItem("spas") === null) {
      spas.push(spa);
      localStorage.setItem("spas", JSON.stringify(spas));
    } else {
      spas = JSON.parse(localStorage.getItem("spas"));
      spas.push(spa);
      localStorage.setItem("spas", JSON.stringify(spas));
    }
    
    
    
    // adderror.textContent === "Added successfully"
    
    location.href =`${window.location.origin}/allspas.html`;
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  spa["owner_email"] = currentUser.email;

  console.log(spa);
});
