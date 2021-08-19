let mainBg = document.getElementById("bg-main");
let headingBg = document.getElementById("bg-heading");
let heroBg = document.getElementById("bg-hero");//not using
let heroBgFront = document.querySelector(".parallax-sec__bg-hero--front");//not using
let heroBgMiddle = document.querySelector(".parallax-sec__bg-hero--middle");
let heroBgBack = document.querySelector(".parallax-sec__bg-hero--back");
let header = document.getElementById("header");
let bottomNav = document.getElementById("bottom-nav");
let homePage = document.getElementById("home-page");
let sideNav = document.querySelector(".side-nav");
let pageNavCity = document.querySelector(".page-nav--city");
let isScrolling;

// pageNav.style.cssText = `
// `;

homePage.addEventListener("scroll", function () {
  let value = homePage.scrollTop;

  //   console.log(value);
  mainBg.style.transform = `translateY(${value * 0.5}px)`;
  /////////////////////////////////////////////////////////////////
  //   heroBg.style.transform = `scale(${1 - value * .0002})`;
  heroBgBack.style.transform = `translateY(${value * 0.35}px)`;
  heroBgMiddle.style.transform = `translateY(${value * 0.2}px)`;
  //   heroBgFront.style.transform = `scale(${1 - value * .00005})`;
  ////////////////////////////////////////////////////////////////
  headingBg.style.transform = `translateY(calc(-100% + ${value * 0.75}px))`;
  header.style.transform = `translateY(${value * 0.5}px)`;
  //   heroBg.style.transform = `translateY(100px)`;
  pageNavCity.style.transform = `translateY(calc(${value * 0.85}px - 0vh))`;

  ////////////////////////////////////////////
  sideNav.style.opacity = "0";
  window.clearTimeout(isScrolling);

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function () {
    // Run the callback
    console.log("Scrolling has stopped.");
    sideNav.style.opacity = "1";
  }, 500);
});

// // Listen for scroll events
// homePage.addEventListener('scroll', function () {

// 	// Clear our timeout throughout the scroll

// }, false);
