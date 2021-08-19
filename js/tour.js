let mainBg = document.getElementById("bg-main");
let headingBg = document.getElementById("bg-heading");
let heroBg = document.getElementById("bg-hero");
let header = document.getElementById("header");
let bottomNav = document.getElementById("bottom-nav");
let homePage = document.getElementById("home-page");
let sideNav = document.querySelector(".side-nav");
let isScrolling;

homePage.addEventListener('scroll', function(){
  let value = homePage.scrollTop;

  console.log(value);
  mainBg.style.transform = `translateY(${value * .5}px)`;
/////////////////////////////////////////////////////////////////
  heroBg.style.transform = `scale(${1 - value * .0002})`;
////////////////////////////////////////////////////////////////
  headingBg.style.transform = `translateY(${value * 0.25}px) scale(${1 - value * .0002})`;
  header.style.transform = `translateY(${value * .5}px)`;
//   heroBg.style.transform = `translateY(100px)`;

  sideNav.style.opacity = "0";
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function(){
    sideNav.style.opacity = "1";
  }, 500);
});

function changeImageSrc(imgSrc, imgsrc2) {
   mainBg.src = imgSrc;
   heroBg.src = imgsrc2;
}

function reloadPage() {
  window.location.reload();
}