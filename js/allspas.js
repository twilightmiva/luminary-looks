const selectitems = document.querySelectorAll(".select");
console.log(selectitems);
const spaItems = document.querySelectorAll(".spa");
console.log(spaItems);
const book = document.querySelector(".book");
console.log(book);
const cancel = document.querySelector(".cancel");
console.log(cancel);
const inputs = document.querySelectorAll("input");
console.log(inputs);
const bookButton = document.querySelectorAll(".bookbutton");
const bookContainer = document.querySelector(".book-now-container");
console.log(bookButton);
const bookingerror = document.querySelector(".bookingerror");
const myForm = document.getElementById("myForm");
console.log(bookingerror);
for (let num = 0; num < selectitems.length; num++) {
  if (selectitems[num].textContent === `All`) {
    console.log(selectitems[num]);
    selectitems[num].classList.add("active");
  }
}
for (let items = 0; items < spaItems.length; items++) {
  if (spaItems[items].classList.contains("alls")) {
    console.log(spaItems[items]);
    spaItems[items].style.display = "flex";
  } else {
    spaItems[items].style.display = "none";
  }
}
for (let num = 0; num < selectitems.length; num++) {
  selectitems[num].addEventListener("click", function () {
    for (let num = 0; num < selectitems.length; num++) {
      if (selectitems[num].classList.contains("active")) {
        selectitems[num].classList.remove("active");
      }
    }
    selectitems[num].classList.add("active");
    let filtername = selectitems[num].textContent;
    console.log(filtername);
    if (filtername.toLowerCase() === "all") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("alls")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    } else if (filtername.toLowerCase() === "nail care spa") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("nails")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    } else if (filtername.toLowerCase() === "barber shop spa") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("barber")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    } else if (filtername.toLowerCase() === "salon hair spa") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("hairs")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    } else if (filtername.toLowerCase() === "facial spa treatment") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("beautiful")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    } else if (filtername.toLowerCase() === "massage spa treatment") {
      for (let items = 0; items < spaItems.length; items++) {
        if (spaItems[items].classList.contains("massages")) {
          console.log(spaItems[items]);
          spaItems[items].style.display = "flex";
        } else {
          spaItems[items].style.display = "none";
        }
      }
    }
  });
}

bookButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    bookContainer.style.display = "flex";
  });
});
cancel.addEventListener("click", function (e) {
  e.preventDefault();
  bookContainer.style.display = "none";
});

book.addEventListener("click", function (e) {
  e.preventDefault();
  const booking = {};
  inputs.forEach((input) => {
    if (input.value === "") {
      bookingerror.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
    } else {
      booking[`${input.name}`] = input.value;
      bookingerror.textContent = "";
      input.style.border = "2px solid black";
    }
  });

  // console.log(booking);
  // Send an email

  if (bookingerror.textContent === "") {
    const templateParams = {
      message: `
    Name: ${booking.name}
    Phone: ${booking.phoneNumber}
Date: ${booking.date}
  Time: ${booking.time}

    `,
    };
    emailjs.send("service_ba4h34m", "template_wakefkm", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        bookContainer.style.display = "none";

      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }
});
