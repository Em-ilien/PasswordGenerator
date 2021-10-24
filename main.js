let password = document.querySelector(".password");
let refresh = document.querySelector(".refresh");
let lengthInput = document.querySelector(".generation input#length");
let lengthOutput = document.querySelector(".generation .output");
let copiedNotif = document.querySelector(".copied");

let inputs = document.querySelectorAll(".characters input");
let lower = document.querySelector(".lower");
let upper = document.querySelector(".upper");
let digit = document.querySelector(".digit");
let symbol = document.querySelector(".symbol");

generationPassword();

refresh.addEventListener("click", () => {
    password.innerHTML = "red";
    generationPassword();
});

lengthInput.addEventListener("input", () => {
    generationPassword();
    lengthOutput.innerHTML = lengthInput.value;
});

password.addEventListener("click", () => {
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(password);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    
    copiedNotif.style.display = "unset";
    setTimeout(() => {
        copiedNotif.style.display = "none";
    }, 1.5 * 1000);
});

inputs.forEach(input => {
    input.addEventListener("input", () => {
        generationPassword();
    });
});

function generationPassword() {
    let lowers = lower.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    let uppers = upper.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    let digits = digit.checked ? "0123456789" : "";
    let symbols = symbol.checked ? "~#{[|\\^@]}&\"'(-_)=°+?./§!:;," : "";
    
    let alf = lowers + uppers + digits + symbols;
    let code = "";
    for (let i = 0; i < lengthInput.value; i++) {
        code += alf.charAt(Math.floor(Math.random() * alf.length));
    }
    password.innerHTML = code;
}