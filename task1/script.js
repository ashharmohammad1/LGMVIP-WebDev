const bgimg = document.getElementsByClassName("bg-imgg");
const curser = document.getElementsByClassName("dot");


function currentSlide(params) {
    console.log(params)
    curser[params].className += " active"
    bgimg[params].style.display="block";
    for(let i=0;i<bgimg.length;i++){
        if(params != i){
            curser[i].className = curser[i].className.replace("active","")
            bgimg[i].style.display="none";
        }
    }

}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentsSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actiive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actiive";
}