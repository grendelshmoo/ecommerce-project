// Template Sources

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

const productCards = () => {
  return `
  <div class="col-4 flex-column p-3 text-center">
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
}

const footerThumbnail = () => {
  return `
  <div class="row">
    <div class="col-3">
      <img src="<%= img %>" alt="<%= prodDescription %>">
    </div>
    <div class="col-9">
      <h6><a class="text-light" href="#"><%= name %></a></h6>
      <p><strong>$<%= price %></strong></p>
    </div>
  </div>
  `
}

const homepage = () => {
  return `<div id="carouselSlide" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../images/dogs1.jpeg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/cat1.jpeg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../images/dogs2.jpeg" alt="Third slide">
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
        <h3>Featured Products</h3>
      </div>
    </div>

    <div class="products row d-flex justify-content-around">

    </div>

  </div>

  <div class="container-fluid bg-dark p-5" id="signup">
    <div class="row justify-content-center text-center">
      <h3>Sign up for our newsletter and we'll send you a 25% off coupon on your next purchase! </h3>
    </div>
    <form id="signup-form">
      <div class="form-row justify-content-center mt-4">
        <div class="col-8">
          <input type="text" class="form-control" id="signup-email" placeholder="Enter email">
        </div>
        <div class="col-2">
          <button id="signup-submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <div class="row justify-content-around mt-5" id="alert-message">

    </div>
  </div>
  `
}

const productsPage = () => {
  return `<div class="container">
    <div class="row">
      <div class="col text-center py-3">
        <h2>Products</h2>
      </div>
    </div>
    <div class="row pb-5">
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
}

const footerSaleHead = () => {
  return `
  <h5 class="text-center">ON SALE</h5>
  <hr>
  `
}

module.exports = {
  successEmail,
  failEmail,
  productCards,
  footerThumbnail,
  homepage,
  productsPage,
  footerSaleHead
}
