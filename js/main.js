const passwordInput = document.querySelector('#password-Input');

passwordInput.addEventListener("input", function () {
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
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-0]/)) score++;

    const width = (score / 4) * 100;


    strengthIndicator.style.width = `${width}%`;

    switch (score) {
        case 1:
            strengthIndicator.style.backgroundColor = "#e70b0b";
            break;
        case 2:
            strengthIndicator.style.backgroundColor = "#FFB74D";
            break;
        case 3:
            strengthIndicator.style.backgroundColor = "#FFF176";
            break;
        case 4:
            strengthIndicator.style.backgroundColor = "#81C784";
            break;
        default:
            strengthIndicator.style.backgroundColor = "transparent";
            break;

    }


    if (password.length > 0) {
        strengthText.innerHTML = `Your password is ${strength[score]}`;
    }

});