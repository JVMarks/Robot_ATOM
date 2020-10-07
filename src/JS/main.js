/*Cor do container*/
var changecolor1 = document.querySelector('#blue');
changecolor1.style.backgroundColor = '#0d2f81';

var changecolor2 = document.querySelector('#beige');
changecolor2.style.backgroundColor = '#ffe7aa';

var changecolor3 = document.querySelector('#white');
changecolor3.style.backgroundColor = '#fff';

var changecolor4 = document.querySelector('#black');
changecolor4.style.backgroundColor = '#0d2f81';

/*cores dos textos*/
var TitleColor1 = document.querySelector('#Title1');
TitleColor1.style.color = '#ffe7aa';/*cor de pele*/

var TEXTColor1 = document.querySelector('#TEXT1');
TEXTColor1.style.color = '#fff';/*branco*/

/*MENU SCROLL*/
const menuItems = document.querySelectorAll('#menu a');
//console.log(menuItems);
function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  //console.log(scrollToIdOnClick);
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 40;/*80*/
  scrollToPosition(to);
}

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  })
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};

/*CAROUSEL */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*FORM */