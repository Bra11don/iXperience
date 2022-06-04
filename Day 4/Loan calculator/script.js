const form = document.getElementById("form");

const loanInput = document.getElementById("loan-input");
const interestInput = document.getElementById("interest-input");
const yearInput = document.getElementById("year-input");

const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inbrackets = 1 + (interestInput.value/100);
    const outbrackets = Math.pow(inbrackets,yearInput.value);
    const finalAmount = loanInput.value * outbrackets;

    output.classList.remove("hide");
    output.innerHTML = finalAmount.toFixed(2);
    // output.innerHTML = 'the text'
})