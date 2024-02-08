const emailInput = document.getElementById("email-input");
const emailBtn = document.getElementById("email-form-button");
const emailForm = document.getElementById("form-div");
const successDiv = document.getElementById("success");
const emailText = document.getElementById("email");
const dismissBtn = document.getElementById("dismiss-btn");
const errorText = document.getElementById("error");

const isEmailValid = (email) => {
    const emailRegex = /^\s*?([a-z]|[0-9])+@([a-z]|[0-9])+.([a-z]|[0-9])+/i;
    const result = emailRegex.test(emailInput.value);
    console.log(result);
    return result;
}

emailBtn.addEventListener("click", (e) => {
    if(!emailInput.value || isEmailValid(emailInput.value) === false){
        alert("Please enter a valid email address.");
        errorText.innerText = "Valid Email Required";
        emailInput.classList.add("error");

        return;
    }else{
        const email = emailInput.value.replace(" ", "");
        emailInput.value = "";
        emailText.innerText = email;
        emailForm.classList.add("hidden");
        successDiv.classList.remove("hidden");
    }
})

dismissBtn.addEventListener("click", () => {
    successDiv.classList.add("hidden");
    emailForm.classList.remove("hidden");
    emailInput.classList.remove("error");
    errorText.innerText = "";
})