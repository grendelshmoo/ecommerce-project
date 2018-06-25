// Data Sources

const accessProducts = function ( productCategory ) {
  const productDataFull = [
    {
      name: "Cat Food",
      price: 8.00,
      petType: "cat",
      prodType: "food",
      sale: true,
      prodDescription: "Food for your cat!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Dog Food",
      price: 18.00,
      petType: "dog",
      prodType: "food",
      sale: false,
      prodDescription: "Food for your dog!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Bird Food",
      price: 5.00,
      petType: "bird",
      prodType: "food",
      sale: true,
      prodDescription: "Food for your bird!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Squeak Toy",
      price: 7.00,
      petType: "dog",
      prodType: "toy",
      sale: false,
      prodDescription: "Toy for your dog!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Fake Mice",
      price: 5.00,
      petType: "cat",
      prodType: "toy",
      sale: false,
      prodDescription: "Toy for your cat!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Bird Cage",
      price: 45.00,
      petType: "bird",
      prodType: "habitat",
      sale: false,
      prodDescription: "Habitat for your bird!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Dog Bed",
      price: 28.00,
      petType: "dog",
      prodType: "habitat",
      sale: true,
      prodDescription: "Bed for your dog!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Cat Scratcher",
      price: 18.00,
      petType: "cat",
      prodType: "habitat",
      sale: false,
      prodDescription: "Scratch post for your cat!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Crickets x25",
      price: 5.00,
      petType: "lizard",
      prodType: "food",
      sale: false,
      prodDescription: "Food for your lizard!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Lizard Terrarium",
      price: 60.00,
      petType: "lizard",
      prodType: "habitat",
      sale: false,
      prodDescription: "Habitat for your lizard!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    }
  ]

  const featureProducts = [
    {
      name: "Lizard Terrarium",
      price: 60.00,
      petType: "lizard",
      prodType: "habitat",
      sale: false,
      prodDescription: "Habitat for your lizard!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Dog Bed",
      price: 28.00,
      petType: "dog",
      prodType: "habitat",
      sale: true,
      prodDescription: "Bed for your dog!",
      img: "http://placehold.it/400/2d2d2d/efefef"
    },
    {
      name: "Cat Food",
      price: 8.00,
      petType: "cat",
      prodType: "food",
      sale: true,
      prodDescription: "Food for your cat!",
      img: "http://placehold.it/400/2d2d2d/efefef"
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
