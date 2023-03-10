const logInWIndowOverlay = document.getElementById('authorization-login')
const signUpWIndowOverlay = document.getElementById('authorization-signup')
const backdropDivElement = document.getElementById('backdrop-for-overlay')

const logInBtnElement = document.getElementById('btn-log-in')
const signUpBtnElement = document.getElementById('btn-sign-up')

const submitLogInBtnElement = document.getElementById('submit-login-btn')
const submitSignUpBtnElement = document.getElementById('submit-signup-btn')

const cancelLogInBtnElement = document.getElementById('cancel-login-btn')
const cancelSignUpBtnElement = document.getElementById('cancel-signup-btn')

logInBtnElement.addEventListener('click', openLogInWIndowOverlay)
signUpBtnElement.addEventListener('click', openSignUpWIndowOverlay)

cancelLogInBtnElement.addEventListener('click', closeLogInWindowOverlay)
cancelSignUpBtnElement.addEventListener('click', closeSignUpWindowOverlay)

backdropDivElement.addEventListener('click', closeLogInWindowOverlay)
backdropDivElement.addEventListener('click', closeSignUpWindowOverlay)