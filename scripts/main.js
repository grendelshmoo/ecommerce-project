// Import data and templates
// const templates = require('./templates')`
// const data = require('./data')
const addScrollOver = require("./scroll-over")
const accessProducts = require("./data")
const render = require("./render")

render(accessProducts("featureProducts"))

addScrollOver()
