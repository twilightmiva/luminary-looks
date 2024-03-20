const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function (e){
    if(e.target.textContent.toLowerCase()==="create an account for your spa"){
        console.log(btn);
    }
})