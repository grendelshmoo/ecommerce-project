// Template Sources

// function templateFunction () {
// }
// module.exports = { templateFunction }


const successEmail = () => {
  return `<div class="alert alert-dismissible alert-success">
    <h5 class="alert-heading">Success!</h5>
    <p class="mb-0">Thank you for signing up for our newsletter!</p>
  </div>`
}

const failEmail = () => {
  return `<div class="alert alert-dismissible alert-danger">
    <h5 class="alert-heading">On Snap!</h5>
    <p class="mb-0">Please enter a correct email!</p>
  </div>`
}

module.exports = {
  successEmail,
  failEmail
}
