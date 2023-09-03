const card = document.querySelector(".card");
const details = document.querySelector(".details");
const image = document.querySelector(".image");

const userEmail = document.querySelector(".user-email");
const invalidEmail = document.querySelector(".invalid-email");
const emailInput = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-button");

const confirmedMessage = document.querySelector(".confirmed-message");
const dismissMessage = document.querySelector(".dismiss-message");

function formSuccess() {
    confirmedMessage.classList.add("active");
    card.classList.add("success");
    details.style.display = "none";
    image.style.display = "none";
}

function validateEmail(email) {
    emailPatern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPatern.test(email);
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();


    if (validateEmail(email)) {
        formSuccess();
        userEmail.innerHTML = email;
        emailInput.value = '';

        invalidEmail.classList.remove("active");
        emailInput.classList.remove("active");
    } else {
        invalidEmail.classList.add("active");
        emailInput.classList.add("active");
    }
})

dismissMessage.addEventListener("click", (e) => {
    confirmedMessage.classList.remove("active");
    card.classList.remove("success");
    details.style.display = "block";
    image.style.display = "block";
})