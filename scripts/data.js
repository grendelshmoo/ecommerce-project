// Data Sources

const accessProducts = function ( productCategory ) {
  const productDataFull = [
    {
      name: "Cat Food",
      price: 8.00,
      petType: "Cats",
      prodType: "Food",
      sale: true,
      prodDescription: "Food for your cat!",
      img: "../images/catfood.jpg"
    },
    {
      name: "Dog Food",
      price: 18.00,
      petType: "Dogs",
      prodType: "Food",
      sale: false,
      prodDescription: "Food for your dog!",
      img: "../images/dogfood.jpg"
    },
    {
      name: "Bird Food",
      price: 5.00,
      petType: "Birds",
      prodType: "Food",
      sale: true,
      prodDescription: "Food for your bird!",
      img: "../images/birdfood.jpg"
    },
    {
      name: "Squeak Toy",
      price: 7.00,
      petType: "Dogs",
      prodType: "Toy",
      sale: false,
      prodDescription: "Toy for your dog!",
      img: "../images/squeaktoy.jpg"
    },
    {
      name: "Fake Mice",
      price: 5.00,
      petType: "Cats",
      prodType: "Toy",
      sale: false,
      prodDescription: "Toy for your cat!",
      img: "../images/fakemice.jpg"
    },
    {
      name: "Bird Cage",
      price: 45.00,
      petType: "Birds",
      prodType: "Habitat",
      sale: false,
      prodDescription: "Habitat for your bird!",
      img: "../images/birdcage.jpg"
    },
    {
      name: "Dog Bed",
      price: 28.00,
      petType: "Dogs",
      prodType: "Habitat",
      sale: true,
      prodDescription: "Bed for your dog!",
      img: "../images/dogbed.jpg"
    },
    {
      name: "Cat Scratcher",
      price: 18.00,
      petType: "Cats",
      prodType: "Habitat",
      sale: false,
      prodDescription: "Scratch post for your cat!",
      img: "../images/catscratcher.jpg"
    },
    {
      name: "Crickets x25",
      price: 5.00,
      petType: "Lizards",
      prodType: "Food",
      sale: false,
      prodDescription: "Food for your lizard!",
      img: "../images/crickets.jpg"
    },
    {
      name: "Lizard Terrarium",
      price: 60.00,
      petType: "Lizards",
      prodType: "Habitat",
      sale: false,
      prodDescription: "Habitat for your lizard!",
      img: "../images/terrarium.jpg"
    }
  ]

  const featureProducts = [
    {
      name: "Lizard Terrarium",
      price: 60.00,
      petType: "Lizards",
      prodType: "Habitat",
      sale: false,
      prodDescription: "Habitat for your lizard!",
      img: "../images/terrarium.jpg"
    },
    {
      name: "Dog Bed",
      price: 28.00,
      petType: "Dogs",
      prodType: "Habitat",
      sale: true,
      prodDescription: "Bed for your dog!",
      img: "../images/dogbed.jpg"
    },
    {
      name: "Cat Food",
      price: 8.00,
      petType: "Cats",
      prodType: "Food",
      sale: true,
      prodDescription: "Food for your cat!",
      img: "../images/birdfood.jpg"
    }
  ]

  if (productCategory === "productDataFull") {
    return productDataFull
  }
  if (productCategory === "featureProducts") {
    return featureProducts
  }
}

module.exports = accessProducts
