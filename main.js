const passworsdInputs = document.querySelectorAll(".password");

let password = "";
let confirmPassword = "";

function checkPasswords(pass1, pass2) {
    if ((pass1 === pass2) && (pass1 !== "")) {
        passworsdInputs.forEach((input) => {
            input.classList.remove("error")
        })
    } else {
        passworsdInputs.forEach((input) => {
            if (!input.classList.contains("error")) {
                input.classList.add("error")
            }
        })
    }
}

passworsdInputs.forEach((password) => {
    password.addEventListener(("input"), () => { 
        password = document.querySelector("#password").value;
        confirmPassword = document.querySelector("#confirm-password").value;
        checkPasswords(password, confirmPassword);
    })
})