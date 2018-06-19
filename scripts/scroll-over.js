const addScrollOver = function () {
  $(".productImg").hover(function () {
    $(this).find(".cartLink").toggleClass( "visable" )
  })
}



  // let toggle = (el) => {
  //   if (el.style.display !== "none") {
  //     el.style.display = "none"
  //   } else if (el.style.display === "none") {
  //     el.style.display = "inherit"
  //   }
  // }
  //
  // productImg.forEach(element => element.addEventListener('mouseenter', function (event) {
  //   const scrollMsg = event.target.querySelector(".cartLink")
  //   toggle(event.target.querySelector(".cartLink"))
  // }))
  //
  // productImg.forEach(element => element.addEventListener('mouseleave', function (event) {
  //   const scrollMsg = event.target.querySelector(".cartLink")
  //   scrollMsg.style.display = "none"
  // }))
// }


module.exports = addScrollOver
