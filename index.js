// Your code goes here:
let clickThumbnail = function(event){

  let theThumbnailImage = jQuery(event.target)
  // window.alert("PICKLE RICK")
  console.log(theThumbnailImage.attr("src"))
  jQuery("#main-image").attr("src",theThumbnailImage.attr("src"))

}

jQuery("#thumbnails img").on("click", clickThumbnail)
