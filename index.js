// Your code goes here:
let clickThumbnail = function(){

  let theThumbnailImage = jQuery(event.target)
  console.log(theThumbnailImage.attr("src"))
  jQuery("#main-image").attr("src",theThumbnailImage.attr("src"))

}

jQuery("#thumbnails img").on("click", clickThumbnail)
