const email = document.querySelector('#email')
const submitBtn = document.querySelector('#submitButton')
const loginDiv = document.querySelector('.loginDiv')
const successDiv = document.querySelector('.successDiv')
const errMsg = document.querySelector('.errMessage')
const confirmEmail = document.querySelector('#confirm-email')
const dismissBtn = document.querySelector('.dismissButton')

function validateEmail(email) {
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    result = atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1
    return result;
}

email.addEventListener('keyup', () => {
    if (email.value.length) {
        submitBtn.classList.add('highlight')
    } else {
        submitBtn.classList.remove('highlight')
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const valid = validateEmail(email.value)
    valid ? submitForm(email.value) : rejectForm();
})


const submitForm = (emailString) => {
    confirmEmail.textContent = `${emailString}.`
    loginDiv.classList.add('hidden')
    successDiv.classList.remove('hidden')
    email.value = ''
}

const rejectForm = () => {
    errMsg.classList.remove('hidden')
}

dismissBtn.addEventListener('click', () => {
    successDiv.classList.add('hidden')
    loginDiv.classList.remove('hidden')
    submitBtn.classList.remove('highlight')
    errMsg.classList.add('hidden')
})