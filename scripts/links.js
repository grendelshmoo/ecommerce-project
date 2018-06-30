function addNavLinks () {
  const renderPage = require("./render")
  const navLinks = document.querySelectorAll("nav a")

  navLinks.forEach(ele => ele.addEventListener('click', (event) => {
    const link = event.target.innerText
    renderPage(link)
  }))
}

module.exports = addNavLinks
