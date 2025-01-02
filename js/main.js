const passwordInput = document.querySelector('#password-Input');

passwordInput.addEventListener("input", function(){
const password = this.value;

const strengthIndicator = document.querySelector('#password-strength-indicator');

const strengthText = document.querySelector('#password-strength-text');

const strength = {
    0: "Very weak",
    1: "Weak",
    2: "Good",
    3: "Strong",
    4: "Very strong"
}

let score = 0;

// Requirements
if (password.length >= 8) score++;

const width = (score / 4) * 100;

strengthIndicator.style.width = `${width}%`;


if (password.length > 0) {
    strengthText.innerHTML = `Your password is ${strength[score]}`;
}

});