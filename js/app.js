let formInput = document.getElementsByClassName('content__form-email')[0];
let formBtn = document.getElementsByClassName('content__form-btn')[0];
let contetnThanksMsg = document.getElementsByClassName('content__form-thanks__message')[0];
let contentErrorMsg = document.getElementsByClassName('content__form-error__message')[0];
let formBorder = document.getElementsByClassName('content__form')[0];
let error = document.getElementsByClassName('error')[0];

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

let removeThanks = () => {
    contetnThanksMsg.classList.remove('content__form-thanks__message--active');
}

let removeError = () => {
    contentErrorMsg.classList.remove('content__form-error__message--active');
    formBorder.classList.remove('content__form--border')
    error.classList.remove('error--active')
}

let addThanks = () => {
    contetnThanksMsg.classList.add('content__form-thanks__message--active');
    setTimeout(() => {
        removeThanks();
    }, 2000);

}

let addError = () => {
    contentErrorMsg.classList.add('content__form-error__message--active');
    formBorder.classList.add('content__form--border')
    error.classList.add('error--active')
    setTimeout(() => {
        removeError();
    }, 2000);
}



let timeOut = () => {}

formBtn.addEventListener('click', () => {
    if (emailIsValid(formInput.value)) {
        addThanks()

    } else {
        addError()

    }
})