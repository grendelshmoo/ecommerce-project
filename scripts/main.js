// Import data and templates

const renderPage = require("./render")
const links = require('./links')

links.addNavLinks()
renderPage("Home")
