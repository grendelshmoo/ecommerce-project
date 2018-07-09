
function addNavLinks() {
  const renderPage = require("./render")
  const navLinks = document.querySelectorAll("nav a")

  navLinks.forEach(ele => ele.addEventListener('click', (event) => {
    const link = event.target.innerText
    renderPage(link)
  }))
}

function addSortLinks() {
  const renderPage = require("./render")
  const sortLinks = document.querySelectorAll(".filter")

  sortLinks.forEach(ele => ele.addEventListener('click', (event) => {
    event.preventDefault()
    const link = event.target.innerText
    renderPage(link)
  }))
}

//
// const successEmail = () => {
//   return `<div class="alert alert-dismissible alert-success">
//     <h5 class="alert-heading">Success!</h5>
//     <p class="mb-0">Thank you for signing up for our newsletter!</p>
//   </div>`
// }
//
// const failEmail = () => {
//   return `<div class="alert alert-dismissible alert-danger">
//     <h5 class="alert-heading">On Snap!</h5>
//     <p class="mb-0">Please enter a correct email!</p>
//   </div>`
// }

function validateEmail(email) {
  const templates = require('./templates')

  const alertMessage = document.querySelector('#alert-message')
  if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    alertMessage.innerHTML = templates.successEmail()
    setTimeout(function() {
      alertMessage.innerHTML = ''
    },2000)

  } else {
    alertMessage.innerHTML = templates.failEmail()
    setTimeout(function() {
      alertMessage.innerHTML = ''
    },2000)
  }
}

function signupAlert() {

  const signupSubmit = document.querySelector('#signup-submit')

  signupSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const signupEmail = document.querySelector('#signup-email').value
    validateEmail(signupEmail)
  })
}

module.exports = {
  addNavLinks,
  addSortLinks,
  signupAlert
}
