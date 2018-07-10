function filterProducts (page) {
  const accessProducts = require('./data')
  const productDataFull = accessProducts('productDataFull').sort((a,b) => {
    return a.price - b.price
  })
  if (page === 'Home' || page === 'PetsMall.com') {
    return accessProducts('featureProducts')
  }
  if (page === 'Products' || page === 'All Products') {
    return productDataFull
  }
  if (page === 'Dogs' || page === 'Cats' || page === 'Birds' || page === 'Lizards') {
    return productDataFull.filter(ele => ele.petType === `${page}`)
  }
  if (page === 'Food' || page === 'Toy' || page === 'Habitat') {
    return productDataFull.filter(ele => ele.prodType === `${page}`)
  }
  if (page === 'Sale' || page === 'Sale Items') {
    return productDataFull.filter(ele => ele.sale === true)
  }
  if (page === 'Under $10') {
    return productDataFull.filter(ele => ele.price <= 10)
  }
  if (page === 'Under $20') {
    return productDataFull.filter(ele => ele.price <= 20)
  }
  if (page === 'Under $50') {
    return productDataFull.filter(ele => ele.price <= 50)
  }
  if (page === 'Under $100') {
    return productDataFull.filter(ele => ele.price <= 100)
  }
}

module.exports = filterProducts
