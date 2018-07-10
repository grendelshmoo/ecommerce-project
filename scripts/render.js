const ejs = require('ejs')
const filterProducts = require('./controllers')

const addScrollOver = require("./scroll-over")
const links = require('./links')
const signup = require('./signup')
const templates = require('./templates')

const renderProducts = function (productData) {
  productData.forEach( element => {
    const location = document.querySelector('.products')

    const template = templates.productCards()

    const card = ejs.render(template, element)
    // const card = JSON.parse(cardString)
    location.innerHTML += card
  })
}


const renderFooterSale = function (productData) {
  const footerSaleBox = document.querySelector('.footer-sale')
  footerSaleBox.innerHTML = `
  <h5 class="text-center">ON SALE</h5>
  <hr>
  `
  productData.forEach(ele => {
    const template = templates.footerThumbnail()
    const thumbnail = ejs.render(template, ele)
    footerSaleBox.innerHTML += thumbnail

  })

}


const renderPage = function (page) {
  const pageContents = document.querySelector(".page-contents")
  if (page === "PetsMall.com" || page === "Home") {
    pageContents.innerHTML = templates.homepage()

    renderProducts(filterProducts(page))
    signup()
    renderFooterSale(filterProducts('Sale'))
    addScrollOver()
  } else {
    pageContents.innerHTML = templates.productsPage()

    links.addSortLinks()
    renderProducts(filterProducts(page))
    renderFooterSale(filterProducts('Sale'))
    addScrollOver()
  }
}

module.exports = renderPage
