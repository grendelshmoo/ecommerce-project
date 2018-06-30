const ejs = require('ejs')
const accessProducts = require("./data")

const renderProducts = function (productData) {
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

const renderPage = function (page) {
  const pageContents = document.querySelector(".page-contents")
  if (page === "home") {
    pageContents.innerHTML =
    `<div id="carouselSlide" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1522438823541-d077e0a978e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9888e8cc610ebdc340f17da7f7cb87ca&auto=format&fit=crop&w=1051&q=80" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1493536122405-24f67df95909?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dde8b61716b0a519b6baac0bb4a5c4b1&auto=format&fit=crop&w=1050&q=80" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-0.3.5&s=f70e2522378184a7fe8159d825fc3042&auto=format&fit=crop&w=1100&q=80" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselSlide" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselSlide" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">

      <div class="row">
        <div class="col text-center mt-3">
          <h3>Header for Products</h3>
        </div>
      </div>

      <div class="products row d-flex justify-content-around">

      </div>

    </div>
    `
    renderProducts(accessProducts("featureProducts"))
  }
  if (page === "products") {
    pageContents.innerHTML =
    `<div class="container">
      <div class="row">
        <div class="col text-center py-3">
          <h2>Products</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-3 d-flex flex-column">
          <h4>Search by Category</h4>
          <hr>
          
          <h6>Pet</h6>
          <a class="filter" href="#">Dogs</a>
          <a class="filter" href="#">Cats</a>
          <a class="filter" href="#">Birds</a>
          <a class="filter" href="#">Lizards</a>
          <br>
          <h6>Type</h6>
          <a class="filter" href="#">Food</a>
          <a class="filter" href="#">Toy</a>
          <a class="filter" href="#">Habitat</a>
          <br>
          <h6>Price</h6>
          <a class="filter" href="#">Sale</a>
          <a class="filter" href="#">Under $10</a>
          <a class="filter" href="#">Under $20</a>
          <a class="filter" href="#">Under $50</a>
          <a class="filter" href="#">Under $100</a>
        </div>
        <div class="products col-9 d-flex flex-row flex-wrap">

        </div>
      </div>
    </div>`

    renderProducts(accessProducts("productDataFull"))
  }
}

module.exports = renderPage
