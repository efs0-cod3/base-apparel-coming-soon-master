let formInput = document.getElementsByClassName('left__side-form--email')[0];
let formBtn = document.getElementsByClassName('form-btn')[0];

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

let removeThanks = () =>  {
    document.getElementsByClassName('left__side-form__thanks-message')[0].classList.remove('left__side-form__thanks-message__active');
}

let removeError = () =>{
document.getElementsByClassName('left__side-form__error-message')[0].classList.remove('left__side-form__error-message__active');
formInput.classList.remove('left__side-form--email__border')
document.getElementsByClassName('error')[0].classList.remove('error--active')
}

let addThanks = () => {
    document.getElementsByClassName('left__side-form__thanks-message')[0].classList.add('left__side-form__thanks-message__active');
    setTimeout(() => {
        removeThanks();
    }, 2000);
    
}

let addError = () => {
    document.getElementsByClassName('left__side-form__error-message')[0].classList.add('left__side-form__error-message__active');
    formInput.classList.add('left__side-form--email__border')
    document.getElementsByClassName('error')[0].classList.add('error--active')
    setTimeout(() => {
        removeError();
    }, 2000);
}

 

let timeOut = () => {
}

formBtn.addEventListener('click', () => {
    if (emailIsValid(formInput.value)) {
        addThanks()

    } else {
        addError()

    }
})

