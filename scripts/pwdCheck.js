const pwd = document.querySelector("#pwd");
const pwdRepeat = document.querySelector("#pwdRepeat");
const message = document.querySelector("#formMessage");

pwdRepeat.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd.value !== pwdRepeat.value) {
        message.textContent = "❗PASSWORDS DO NOT MATCH!";
        message.style.visibility = "visible";
        message.style.display = "block";
        pwd.style.backgroundColor = "#fff0f3";
        pwdRepeat.style.backgroundColor = "#fff0f3";
        pwd.value = "";
        pwdRepeat.value = "";
        pwd.focus();
    } else {
        message.style.display = "none";
        pwdRepeat.style.backgroundColor = "#fff";
        pwd.style.backgroundColor = "#fff";
    }
}