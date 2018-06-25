const ejs = require('ejs')

const render = function (productData) {
  productData.forEach( element => {
    const location = document.querySelector('.products')

    const template = `
    <div class="col-4 flex-column p-3">
      <div class="productImg">
        <img src="<%= img %>" alt="<%= prodDescription %>">
        <div class="cartLink text-light text-center text-uppercase">
          <a class="text-light" href="#">Add to Cart</a>
        </div>
      </div>
      <h6 class="pt-2 text-uppercase"><%= name %></h6>
      <span><%= prodDescription %><strong class="text-right">$<%= price %></strong></span>
    </div>
    `

    const card = ejs.render(template, element)
    // const card = JSON.parse(cardString)
    location.innerHTML += card
  })
}


module.exports = render
