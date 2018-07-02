const addScrollOver = function () {
  $(".productImg").hover(function () {
    $(this).find(".cartLink").toggleClass( "visable" )
  })
}

module.exports = addScrollOver
